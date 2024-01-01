<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Events\OrderEvent;
use App\Models\OrderItem;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redis;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function newOrder(Request $request)
    {
        $order = Order::create([
            'name' => $request->name,
            'order_date' => Carbon::now(),
            'order_status' => 'pending',
        ]);

        foreach ($request->items as $item) {
            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $item['id'],
                'quantity' => $item['total'],
                'total_price' => $item['total'] * $item['price']
            ]);
        }
        $newOrder = Order::with('order_items.product')->find($order->id);
        Redis::hset('order_queue', $newOrder->id, json_encode($newOrder));
        event(new OrderEvent(Order::with('order_items.product')->find($order->id)));
        return response()->json(['message' => 'Order created successfully']);
    }

    public function index()
    {
        return Inertia::render('Orders');
    }

    public function changeStatus(Request $request)
    {

        if ($request->status == 'completed' || $request->status == 'canceled') {
            Redis::hdel('order_queue', $request->id);
        } else {
            $order = json_decode(Redis::hget('order_queue', $request->id), true);
            $order['order_status'] = $request->status;
            Redis::hset('order_queue', $request->id, json_encode($order));
        }

        event(new OrderEvent());
    }
}
