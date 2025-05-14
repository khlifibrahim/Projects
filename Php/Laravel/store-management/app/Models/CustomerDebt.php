<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerDebt extends Model
{
    // protected $table = '';
    protected $fillable = ['customer_name', 'item', 'due_date', 'category', 'status'];

    public function products() {
        return $this->hasMany(Product::class);
    }
}
