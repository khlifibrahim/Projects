<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ProductController extends Controller
{
    public function index(Product $products){

        $products = Product::paginate(5);
        return view("pages.products.index", ['products' => $products]);

    }

    public function store(Request $request) {

        if ( $request['category'] == 'product') {
            $data = $request->validate([
                'name' => 'required|string|max:255',
                'category' => [
                    'required',
                    'string',
                    Rule::in(['product', 'service'])
                ],
                'quantity' => 'required|integer',
                'price' => 'required|numeric',
                'supplier' => 'nullable|string',
                'purchase_date' => 'date'
            ]);
        } else {
            $data = $request->validate([
                'name' => 'required|string|max:255',
                'category' => [
                    'required',
                    'string',
                    Rule::in(['product', 'service'])
                ],
                'quantity' => 'nullable|integer',
                'price' => 'nullable|numeric',
                'supplier' => 'nullable|string',
                'purchase_date' => 'nullable|date'
            ]);
        }

        Product::create($data);

        return redirect()->route('products.index')->with('success', 'Product saved successfuly');

    }

    public function destroy(Product $product) {
        // dd($product->id, $product);

        $product->delete();

        return redirect()->route('products.index')->with('success', 'Product deleted successfully');
    }

}
