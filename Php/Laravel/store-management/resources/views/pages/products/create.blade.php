@section('title', 'New Product')

<form action="{{ route('products.store')}}" method="POST" class="mt-12">
    @csrf
    <div class="product-image relative  bg-[#FAFAFB] w-[150px] h-[150px] mx-auto rounded-full cursor-pointer">
        <label for="image-file" class="h-full w-full">
            <span class="absolute top-[50%] left-[50%] translate-[-50%]">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="32"  height="32"  viewBox="0 0 24 24"  fill="#030229"  class="icon icon-tabler icons-tabler-filled icon-tabler-camera"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 3a2 2 0 0 1 1.995 1.85l.005 .15a1 1 0 0 0 .883 .993l.117 .007h1a3 3 0 0 1 2.995 2.824l.005 .176v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9a3 3 0 0 1 2.824 -2.995l.176 -.005h1a1 1 0 0 0 1 -1a2 2 0 0 1 1.85 -1.995l.15 -.005h6zm-3 7a3 3 0 0 0 -2.985 2.698l-.011 .152l-.004 .15l.004 .15a3 3 0 1 0 2.996 -3.15z" /></svg>
            </span>
            {{-- <input type="file" name="" id="image-file" class="hidden w-full h-full cursor-pointer"> --}}
        </label>
    </div>

    <div class="group-input flex flex-col my-8">
        <label class="font-semibold text-[16px]" for="">Product Name</label>
        <input class="h-[50px] bg-[#FAFAFB] px-6 rounded-[10px] mt-2 outline-[#605BFF]"  type="text" name="name" id="name" placeholder="Product name">
    </div>

    <div class="group-input flex flex-col my-8">
        <label class="font-semibold text-[16px]" for="">Category</label>
        <select  class="h-[50px] bg-[#FAFAFB] px-6 rounded-[10px] mt-2 outline-[#605BFF]" name="category" id="category">
            <option value="default">Select category</option>
            <option value="product">Product</option>
            <option value="service">Service</option>
        </select>
    </div>

    <div class="quantity group-input flex flex-col my-8">
        <label class="font-semibold text-[16px]" for="">Quantity</label>
        <input class="h-[50px] bg-[#FAFAFB] px-6 rounded-[10px] mt-2 outline-[#605BFF]"  type="number" min="0" name="quantity" id="quantity" placeholder="Quantity">
    </div>

    <div class="group-input flex flex-col my-8">
        <label class="font-semibold text-[16px]" for="">Price</label>
        <input class="h-[50px] bg-[#FAFAFB] px-6 rounded-[10px] mt-2 outline-[#605BFF]"  type="number" min="0" step="0.1" name="price" id="price" placeholder="price in dh">
    </div>

    <div class="supplier group-input flex flex-col my-8">
        <label class="font-semibold text-[16px]" for="">Supplier</label>
        <input class="h-[50px] bg-[#FAFAFB] px-6 rounded-[10px] mt-2 outline-[#605BFF]"  type="text" name="supplier" id="supplier" placeholder="Supplier name">
    </div>

    <div class="purchase_date group-input flex flex-col my-8">
        <label class="font-semibold text-[16px]" for="">Purchased Date</label>
        <input class="h-[50px] bg-[#FAFAFB] px-6 rounded-[10px] mt-2 outline-[#605BFF]"  type="date" name="purchase_date" id="purchase_date">
    </div>

    <div class="group-input flex flex-col my-8">
        <button type="submit" class="bg-[#605BFF] h-[50px] rounded-[10px] font-bold text-white cursor-pointer">
            Save Product
        </button>
    </div>
</form>
