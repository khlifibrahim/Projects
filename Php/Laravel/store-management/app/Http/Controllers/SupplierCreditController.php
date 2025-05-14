<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SupplierDebt;

class SupplierCreditController extends Controller
{
    public function index() {
        return view("pages.credits.supplier.index");
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

    public function edit(SupplierDebt $credit) {
        return view("pages.credits.edite", ['credit', $credit]);
    }

    public function destroy(SupplierDebt $credit) {
        return dd($credit);
    }
}
