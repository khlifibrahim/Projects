@section('title', 'New Product')

<form id="debtForm" action="{{ route('credits.customer.store')}}" method="POST" class="mt-12">
    @csrf
    @method('POST')
    <div class="group-input flex flex-col my-8">
        <label class="font-semibold text-[16px]" for="">Customer Name</label>
        <input class="h-[50px] bg-[#FAFAFB] px-6 rounded-[10px] mt-2 outline-[#605BFF]"  type="text" name="customer_name" id="customer_name" placeholder="Product name">
    </div>

    <div class="group-input flex flex-col my-8">
        <label class="font-semibold text-[16px]" for="">Category</label>
        <select  class="h-[50px] bg-[#FAFAFB] px-6 rounded-[10px] mt-2 outline-[#605BFF]" name="category" id="category">
            <option>Select category</option>
            <option value="product">Product</option>
            <option value="service">Service</option>
        </select>
    </div>

    <div class="product group-input flex flex-col my-8">
        <label class="font-semibold text-[16px]" for="">Product</label>
        <select class="h-[50px] bg-[#FAFAFB] px-6 rounded-[10px] mt-2 outline-[#605BFF]"  type="text" name="item" id="item" placeholder="Product name">
            <option >Select Product</option>
            @foreach ($products as $product)
                <option value="{{ $product -> id }}">{{ $product -> name }}</option>
            @endforeach
        </select>
    </div>

    <div class="group-input flex flex-col my-8">
        <label class="font-semibold text-[16px]" for="">Status</label>
        <select  class="h-[50px] bg-[#FAFAFB] px-6 rounded-[10px] mt-2 outline-[#605BFF]" name="status" id="status">
            <option value="default">Select Status</option>
            <option value="paid">Paid</option>
            <option value="partial">Partial</option>
            <option value="unpaid">Unpaid</option>
        </select>
    </div>

    <div class="group-input flex flex-col my-8">
        <label class="font-semibold text-[16px]" for="amount">Amounte</label>
        <input class="h-[50px] bg-[#FAFAFB] px-6 rounded-[10px] mt-2 outline-[#605BFF]"  type="number" min="0" step="0.1" name="amount" id="amount" placeholder="price in dh">
    </div>

    <div class="purchase_date group-input flex flex-col my-8">
        <label class="font-semibold text-[16px]" for="">Made at</label>
        <input class="h-[50px] bg-[#FAFAFB] px-6 rounded-[10px] mt-2 outline-[#605BFF]"  type="date" name="due_date" id="due_date">
    </div>

    <div class="group-input flex flex-col my-8">
        <button type="submit" class="submit bg-[#605BFF] h-[50px] rounded-[10px] font-bold text-white cursor-pointer">
            Save
        </button>
    </div>
</form>
