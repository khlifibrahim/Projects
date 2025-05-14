<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CustomerDebt;

class CustomerCreditController extends Controller
{
    public function index() {
        $credits = CustomerDebt::paginate(8);

        return view("pages.credits.customer.index", ['credits' => $credits]);
    }

    public function create() {
        return view("pages.credits.create");
    }

    public function store(Request $request) {
        dd($request->all());
    }

    public function show($id) {
        return view("pages.credits.show")->with("id", $id);
    }

    public function edit(CustomerDebt $credit) {
        return view("pages.credits.edite", ['credit', $credit]);
    }
}
