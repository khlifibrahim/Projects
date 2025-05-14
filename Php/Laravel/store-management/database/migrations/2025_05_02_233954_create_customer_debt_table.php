<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customer_debt', function (Blueprint $table) {
            $table->id();
            $table->string('customer_name');
            $table->unsignedBigInteger('item');
            $table->date('due_date');
            $table->enum('category', ['product', 'service'])->nullable(true);
            $table->enum('status', ['Paid', 'Unpaid', 'Partial']);
            $table->timestamps();

            $table->foreign('item')->references('id')->on('products')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer_debt');
    }
};
