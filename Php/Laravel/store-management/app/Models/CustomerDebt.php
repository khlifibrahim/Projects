<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class CustomerDebt extends Model
{
    // protected $table = 'customer_debts';
    protected $fillable = ['customer_name', 'item', 'amount', 'due_date', 'category', 'status'];

    public function product() {
        return $this->belongsTo(Product::class, 'item');
    }
}
