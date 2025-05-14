<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sales;
use App\Models\Product;
use Illuminate\Validation\Rule;

class SalesController extends Controller
{

    public function index() {
        $sales = Sales::with('product')->paginate(5);
        $products = Product::all();

        return view("pages.sales.index", ['sales' => $sales, 'products' => $products]);
    }

    public function create() {

        return view('pages.sales.create');
    }

    public function store(Request $request) {

        $data = $request->validate([
            'product_id' => ['required', 'exists:products,id'],
            'category' => [
                'required',
                'string',
                Rule::in(['product', 'service'])],
            'quantity' => 'required',
            'price' => 'integer',
            'date' => 'date'
        ]);

        Sales::create($data);

        return redirect()->route('sales.index')->with('success', 'Sale created successfully');
    }
}
