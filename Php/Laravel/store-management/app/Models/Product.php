<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // protected $table = 'products';
    protected $fillable = [
        'name',
        'category',
        'quantity',
        'price',
        'supplier',
        'purchase_date'
    ];

    public function customerCredit()
    {
        return $this->belongsTo(CustomerDebt::class);
    }
}
