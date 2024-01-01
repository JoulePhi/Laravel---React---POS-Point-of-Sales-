<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Dashboard', compact('categories'));
    }

    public function getProductsByCategory(Request $request)
    {
        $products = [];

        if ($request->category_id != 0) {
            $products = Product::where('category_id', $request->category_id)->get();
        } else {
            $productss = Product::all()->groupBy('category_id');
            $products = $productss->map(function ($group) {
                return $group->first();
            })->values()->toArray();
        }

        return response()->json($products);
    }
}
