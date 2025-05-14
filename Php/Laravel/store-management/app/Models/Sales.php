<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    protected $fillable = [
        'item',
        'quantity',
        'price',
        'date',
        'product_id',
    ];

    public function product() {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
