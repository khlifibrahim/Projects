<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupplierDebt extends Model
{
    protected $fillable = [
        "supplier_name",
        "items",
        "amount",
        "due_date",
        "type",
        "status"
    ];
}
