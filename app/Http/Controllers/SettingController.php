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
        $products = Product::with('category')->get();
        return Inertia::render('Settings', compact('categories', 'products'));
    }
    public function indexCategory($id)
    {
        if ($id) {
            $category = Category::findOrFail($id);
            return Inertia::render('Admin/Category', compact('category'));
        }
        return Inertia::render('Admin/Category');
    }
    public function indexProduct($id)
    {
        $categories = Category::all();
        if ($id) {
            $product = Product::with('category')->find($id);
            return Inertia::render('Admin/Product', compact('categories', 'product'));
        }
        return Inertia::render('Admin/Product', compact('categories'));
    }

    public function addCategory(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'image' => 'required'
        ]);
        $file = $request->file('image');
        $fileName = time() . '.' . $file->getClientOriginalExtension();
        $request->image->storeAs('public/images', $fileName);
        $category = Category::where('name', $request->name)->first();

        if (!$category) {
            Category::create([
                'name' => $request->name,
                'image' => $fileName
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


    public function editProduct(Request $request, $id)
    {
        $validate = $request->validate([
            'name' => 'required',
            'category_id' => 'required',
            'description' => 'required',
            'price' => 'required',
            'quantity' => 'required',
        ]);
        if ($request->image != 'undefined') {
            $file = $request->file('image');
            $fileName = time() . '.' . $file->getClientOriginalExtension();
            $request->image->storeAs('public/images', $fileName);
            $validate['image'] = $fileName;
        }
        $product = Product::find($id);
        try {
            $product->update($validate);
            return response()->json(['status' => 'success']);
        } catch (\Throwable $th) {
            return response('error', 500);
        }
    }

    public function editCategory(Request $request, $id)
    {
        $validate = $request->validate([
            'name' => 'required',
        ]);
        if ($request->image != 'undefined') {
            $file = $request->file('image');
            $fileName = time() . '.' . $file->getClientOriginalExtension();
            $request->image->storeAs('public/images', $fileName);
            $validate['image'] = $fileName;
        }
        $category = Category::find($id);
        try {
            $category->update($validate);
            return response()->json(['status' => 'success']);
        } catch (\Throwable $th) {
            return response('error', 500);
        }
        // return response()->json($request->all());
    }

    public function deleteProduct($id)
    {
        $product = Product::find($id);

        try {
            $product->delete();
            return response()->json(['status' => 'success']);
        } catch (\Throwable $th) {
            return response('error', 500);
        }
    }
    public function deleteCategory($id)
    {
        $category = Category::find($id);

        try {
            $category->delete();
            return response()->json(['status' => 'success']);
        } catch (\Throwable $th) {
            return response('error', 500);
        }
    }
}
