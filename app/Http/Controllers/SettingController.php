<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{


    public function index()
    {
        $categories = Category::withCount('products')->get();
        $products = Product::all();
        return Inertia::render('Settings', compact('categories', 'products'));
    }
    public function indexCategory()
    {
        return Inertia::render('Admin/Category');
    }
    public function indexProduct()
    {
        $categories = Category::all();
        return Inertia::render('Admin/Product', compact('categories'));
    }

    public function addCategory(Request $request)
    {
        $category = Category::where('name', $request->name)->first();

        if (!$category) {
            Category::create([
                'name' => $request->name
            ]);

            return response()->json(['status' => 'success']);
        }

        return response('error', 500);
    }

    public function addProduct(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required',
            'category_id' => 'required',
            'description' => 'required',
            'price' => 'required',
            'quantity' => 'required',
            'image' => 'required'
        ]);
        $validate['selled'] = 0;
        $file = $request->file('image');
        $fileName = time() . '.' . $file->getClientOriginalExtension();
        $request->image->storeAs('public/images', $fileName);
        $validate['image'] = $fileName;
        $product = Product::where('name', $request->name)->first();

        if (!$product) {
            Product::create($validate);

            return response()->json(['status' => 'success']);
        }

        return response('error', 500);
    }
}
