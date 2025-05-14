<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Charge;

class ChargeController extends Controller
{
    public function index() {
        $charge = Charge::all();

        return view('pages.charge.index');
    }
}
