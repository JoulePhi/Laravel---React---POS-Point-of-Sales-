<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Order;
use App\Models\OrderItem;
use App\Events\OrderEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redis;

class MidtransController extends Controller
{
    public function pay(Request $request)
    {
        $amount = 0;
        $order = Order::create([
            'name' => $request->name,
            'order_date' => Carbon::now(),
            'order_status' => 'pending',
        ]);

        foreach ($request->items as $item) {
            $amount += $item['price'] * $item['total'];
            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $item['id'],
                'quantity' => $item['total'],
                'total_price' => $item['total'] * $item['price']
            ]);
        }
        \Midtrans\Config::$serverKey = env('MIDTRANS_SERVER_KEY');
        \Midtrans\Config::$isProduction = env('APP_ENV') === 'production';
        \Midtrans\Config::$isSanitized = false;
        \Midtrans\Config::$is3ds = false;

        $params = array(
            'transaction_details' => array(
                'order_id' => $order->id,
                'gross_amount' => $amount,
            ),
            'customer_details' => array(
                'first_name' => $request->name,
                'items' => $request->items
            ),
        );
        $paymentUrl = \Midtrans\Snap::createTransaction($params)->redirect_url;

        return response()->json(['url' => $paymentUrl]);
    }

    public function confirm(Request $request)
    {
        $newOrder = Order::with('order_items.product')->find($request->order_id);
        Redis::hset('order_queue', $newOrder->id, json_encode($newOrder));
        event(new OrderEvent());
    }
}
