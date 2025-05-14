@extends('home')

@section('title', 'Customer Credit')
@section('content')
    {{-- <div class="flex justify-between"> --}}
        <div class="products h-full w-full p-16 font-[Nunito]">
            <div class="flex flex-col justify-between min-h-full">
                <div>
                    <div class="flex items-center justify-between">
                        <h1 class="font-bold text-2xl font-[Nunito]">Credit list</h1>
                        <div class="flex items-center gap-6">
                            <div class="search max-w-[230px] flex justify-between items-center h-[50px] bg-white rounded-[10px] px-5">
                                <input type="text" name="" id="" placeholder="Search" class="w-full h-full outline-0">
                                <span class="pr-5">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#000000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                                </span>
                            </div>
                            <div>
                                <button id="add-products" class="add-btn flex items-center justify-center gap-2 bg-[#605BFF] w-[122px] h-[50px] rounded-[10px] text-white font-semibold font-[Nunito] cursor-pointer">
                                    <span><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ffffff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg></span>
                                    Add New
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="products-list">
                        <div class="flex items-center justify-between h-[50px]  px-8 mt-10 font-[Nunito] text-[#030229] rounded-[10px]">
                            <div class="row basis-[100%]">Name</div>
                            <div class="row basis-[80%]">Product</div>
                            <div class="row basis-[80%]">Quantity</div>
                            <div class="row basis-[80%]">Total</div>
                            <div class="row basis-[20%]"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#030229"  class="icon icon-tabler icons-tabler-filled icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" /><path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" /></svg></div>
                        </div>

                        <div class="table-body mb-4">
                            @if(count($credits) == 0 )
                                <div class="flex items-center justify-center p-20">
                                    <h1 class="font-[Nunito] text-[24px]">No Credits available!!</h1>
                                </div>
                            @endif

                            @foreach($credits as $credit)
                                <div aria-keyshortcuts="{{ $credit -> id}}" class="flex items-center justify-between h-[50px] px-8 mt-2 font-[Nunito] rounded-[10px] hover:bg-white hover:shadow-neutral-400 cursor-pointer">
                                    <div class="row basis-[100%]">{{$credit -> name}}</div>
                                    <div class="row basis-[80%]">{{$credit -> category}}</div>
                                    <div class="row basis-[80%]">{{$credit -> quantity}} Pcs</div>
                                    <div class="row basis-[80%]">{{$credit -> price}} DH</div>
                                    <div class="row basis-[80%]">{{$credit -> quantity * $credit -> price  }} DH</div>
                                    <div class="row relative basis-[20%] items-end">
                                        <span class="action" id="action" onclick="openMenu(this, {{$credit->id}})">
                                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#B3B3BF"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                                        </span>
                                        <div class="hidden" id="action-menu">
                                            <div  class="absolute z-50 bg-white p-2 flex flex-col gap-2">
                                                <span class="flex gap-2 bg-[#5B93FF]/20 px-3 py-2 rounded-[10px]">
                                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#5B93FF"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
                                                    <p class="text-[#5B93FF]">Edit</p>
                                                </span>
                                                <span>
                                                    <form action="{{route('products.destroy', parameters: $credit->id)}}" method="POST" >
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit" class="flex gap-2 bg-[#E71D36]/20 px-3 py-2 rounded-[10px] cursor-pointer">
                                                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="#E71D36"  class="icon icon-tabler icons-tabler-filled icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" /><path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" /></svg>
                                                            <p class="text-[#E71D36]">Delete</p>
                                                        </button>
                                                    </form>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>

                    </div>
                </div>
                <div class="py-4 flex-end">
                    {{ $credits -> links('pagination::tailwind')}}
                </div>
            </div>
            </div>
        <div id="product-form" class="overlay fixed top-0 left-0 bg-black/60 w-full h-full">
            <div class="add-products absolute top-0 right-0 h-screen  w-[400px]  py-16 px-10 bg-white overflow-y-scroll">
                <div class="new-product z-10 text-[#030229]">
                    <div class="head flex items-center gap-8">
                        <span class="cursor-pointer" id="back-btn">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#030229"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
                        </span>
                        <h1 class="font-bold text-[18px]">Register Credit</h1>
                    </div>

                    @include('pages.credits.customer.create')
                </div>
            </div>
        </div>
    {{-- </div> --}}
@endsection

@push('scripts')
    <script>
        const inputs = Array.from(document.querySelectorAll('form input'));
        const addProduct = document.getElementById('add-products');
        const productForm = document.getElementById('product-form');
        const backBtn = document.getElementById('back-btn');
        const actionBtn = document.getElementById('action');
        const actionMenuBtn = document.getElementById('action-menu')

        const qnt = document.querySelector('.quantity')
        const sppl = document.querySelector('.supplier')
        const prDate = document.querySelector('.purchase_date')

        addProduct.addEventListener('click', () => {
            productForm.classList.remove('hidden')
        })

        backBtn.addEventListener('click', () => {
            productForm.classList.add('hidden')
        })

        function openMenu(e, value) {
            e.nextElementSibling.classList.toggle('hidden')
        }
console.log('inputs: ', inputs)

        const category = document.getElementById('category');
        console.log('add product work')
        document.addEventListener('click', ()=> {

            if(category.value === 'product') {
                qnt.classList.remove('hidden')
                sppl.classList.remove('hidden')
                prDate.classList.remove('hidden')
            }else if(category.value === 'service') {
                qnt.classList.add('hidden')
                sppl.classList.add('hidden')
                prDate.classList.add('hidden')
            }
        })
    </script>
@endpush
