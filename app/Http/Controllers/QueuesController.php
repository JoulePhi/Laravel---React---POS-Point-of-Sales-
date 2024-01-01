<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Inertia\Inertia;

class QueuesController extends Controller
{
    public function index()
    {
        return Inertia::render('Queues');
    }

    public function getLists()
    {
        $orders = Redis::hgetall('order_queue');
        return response()->json(collect(array_map('json_decode', $orders)));
    }
}
