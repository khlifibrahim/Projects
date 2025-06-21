<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\CustomerDebt;
use App\Models\Product;

class CustomerCreditController extends Controller
{
    public function index() {
        $credits = CustomerDebt::with('product')->paginate(8);
        $products = Product::all();

        return view("pages.credits.customer.index", ['credits' => $credits, 'products' => $products]);
    }

    public function create() {
        return view("pages.credits.customer.create");
    }

    public function store(Request $request) {
        // dd($request->all());
        $data = $request->validate([
            "customer_name" => "required|string",
            "item" => "integer|nullable",
            "category" => ["required", Rule::in(['product', 'service'])],
            "status" => ["required", Rule::in(['paid', 'partial', 'unpaid'])],
            "amount" => "required|numeric",
            "due_date" => "required|date"
        ]);

        CustomerDebt::create($data);
        // dd($data);

        return redirect()->route('credits.customer.index')->with('success', 'Credit Registered Successfully');
    }

    public function show($id) {
        return view("pages.credits.show")->with("id", $id);
    }

    public function edit(CustomerDebt $credit) {
        return view("pages.credits.edite", ['credit', $credit]);
    }

    public function destroy(CustomerDebt $credit) {
        $credit->delete();

        return redirect()->route('credits.customer.index')->with('success', 'Product deleted successfully');
    }
}


// 0652106997
// sim 6775
// phone 4775

// gmail: osohosoh26@gmail.com
// pass : moi@ahmed2025


// alhajja082@gmail.com
// me@ah2025
