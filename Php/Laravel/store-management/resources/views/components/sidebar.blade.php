<aside class="w-2xs">
    <div class="head flex items-center gap-5 mx-12 my-16">
        <img src="{{ asset('images/logo.png')}}" class="w-11" alt="">
        <p class="font-semibold text-[24px]">Login</p>
    </div>

    <nav class="">
        <a href="{{ route('pages.dash')}}" class="{{request()->is('/')}}">
            <div class="flex gap-4 py-2 px-3  bg-[] mr-12 my-2 rounded-[10px] relative hover:text-[#605BFF] hover:fill-[#605BFF]">
                @if (request()->is('/') or request()->is('dashboard'))
                    <div class="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#605BFF]/20 from-5% to-transparent to-90%"></div>
                @endif
                <span class="ml-2">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="{{(request()->is('/') or request()->is('dashboard')) ? '#605BFF' : 'currentColor'}}"  class="icon hover:stroke-[#605BFF] icon-tabler icons-tabler-filled icon-tabler-layout-dashboard"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2zm10 -4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 -8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z" /></svg>
                </span>
                <p class="{{(request()->is('/') or request()->is('dashboard')) ? 'text-[#605BFF]' : ''}}">Dashboard</p>
            </div>
        </a>
        {{-- <a href="/statistics" class="{{request()->is('statistics')}}">
            <div class="flex items-center gap-4 py-2 px-3 font-semibold text-[#030229] hover:text-[#605BFF] hover:fill-[#605BFF] mr-12 my-2 rounded-[10px]">
                @if (request()->is('statistics'))
                    <div class="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#605BFF]/20 from-5% to-transparent to-90%"></div>
                @endif
                <span class="ml-2 hover:fill-[#605BFF]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path  fill-rule="evenodd" clip-rule="evenodd" d="M5.33037 0.000488281H14.6694C18.0704 0.000488281 19.9904 1.92949 20.0004 5.33049V14.6705C20.0004 18.0705 18.0704 20.0005 14.6694 20.0005H5.33037C1.92937 20.0005 0.000366211 18.0705 0.000366211 14.6705V5.33049C0.000366211 1.92949 1.92937 0.000488281 5.33037 0.000488281ZM10.0494 15.8605C10.4804 15.8605 10.8394 15.5405 10.8794 15.1105V4.92049C10.9194 4.61049 10.7704 4.29949 10.5004 4.13049C10.2194 3.96049 9.87937 3.96049 9.61037 4.13049C9.33937 4.29949 9.19037 4.61049 9.21937 4.92049V15.1105C9.27037 15.5405 9.62937 15.8605 10.0494 15.8605ZM14.6504 15.8605C15.0704 15.8605 15.4294 15.5405 15.4804 15.1105V11.8305C15.5094 11.5095 15.3604 11.2105 15.0894 11.0405C14.8204 10.8705 14.4804 10.8705 14.2004 11.0405C13.9294 11.2105 13.7804 11.5095 13.8204 11.8305V15.1105C13.8604 15.5405 14.2194 15.8605 14.6504 15.8605ZM6.21937 15.1105C6.17937 15.5405 5.82037 15.8605 5.38937 15.8605C4.95937 15.8605 4.59937 15.5405 4.56037 15.1105V8.20049C4.53037 7.88949 4.67937 7.58049 4.95037 7.41049C5.21937 7.24049 5.56037 7.24049 5.83037 7.41049C6.09937 7.58049 6.25037 7.88949 6.21937 8.20049V15.1105Z" fill="{{request()->is('statistics') ? '#605BFF' : 'currentColor'}}"/>
                    </svg>
                </span>
                <p class="{{request()->is('statistics') ? 'text-[#605BFF]' : ''}}">Statistics</p>
            </div>
        </a> --}}
        <a href="{{ route('charge.index')}}" class="">
            <div class="flex items-center gap-4 py-2 px-3 font-semibold text-[#030229] hover:text-[#605BFF] mr-12 my-2 rounded-[10px] ">
                @if (request()->is('charges'))
                    <div class="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#605BFF]/20 from-5% to-transparent to-90%"></div>
                @endif
                <span class="ml-2">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7872 6.53905C19.6518 6.67058 19.4681 6.74574 19.2747 6.74574C18.559 6.74574 17.9787 7.30945 17.9787 7.9953C17.9787 8.68585 18.5522 9.24674 19.2611 9.25426C19.6605 9.25802 20 9.5286 20 9.91662V12.3265C20 14.3549 18.3075 16 16.2186 16H13.0658C12.7398 16 12.4758 15.7435 12.4758 15.4269V13.3975C12.4758 13.0029 12.1567 12.6929 11.7505 12.6929C11.354 12.6929 11.0251 13.0029 11.0251 13.3975V15.4269C11.0251 15.7435 10.7611 16 10.4362 16H3.78143C1.70213 16 0 14.3558 0 12.3265V9.91662C0 9.5286 0.339458 9.25802 0.738878 9.25426C1.44874 9.24674 2.02128 8.68585 2.02128 7.9953C2.02128 7.32824 1.46035 6.8209 0.725339 6.8209C0.531915 6.8209 0.348162 6.74574 0.212766 6.61421C0.0773694 6.48268 0 6.30417 0 6.11627V3.68291C0 1.65731 1.706 0 3.7911 0H10.4362C10.7611 0 11.0251 0.256489 11.0251 0.573106V2.97827C11.0251 3.36348 11.354 3.68291 11.7505 3.68291C12.1567 3.68291 12.4758 3.36348 12.4758 2.97827V0.573106C12.4758 0.256489 12.7398 0 13.0658 0H16.2186C18.3075 0 20 1.64416 20 3.67352V6.0411C20 6.22901 19.9226 6.40752 19.7872 6.53905ZM11.7505 10.8702C12.1567 10.8702 12.4758 10.5508 12.4758 10.1656V6.40752C12.4758 6.02231 12.1567 5.70288 11.7505 5.70288C11.354 5.70288 11.0251 6.02231 11.0251 6.40752V10.1656C11.0251 10.5508 11.354 10.8702 11.7505 10.8702Z" fill="{{request()->is('charges') ? '#605BFF' : 'currentColor'}}"/>
                    </svg>
                </span>
                <p class="{{request()->is('charges') ? 'text-[#605BFF]' : ''}}">Charges</p>
            </div>
        </a>

        <div class="relative flex gap-4 py-2 px-3 font-semibold text-[#030229] hover:text-[#605BFF] mr-12 my-2">
            <a href="{{route('credits.index')}}" class="{{request()->is('/credits')}}">
                <div class=" flex items-center gap-4 rounded-[10px]">
                    @if (request()->is('credits'))
                        <div class="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#605BFF]/20 from-5% to-transparent to-90%"></div>
                    @endif
                    <span class="ml-2">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7872 6.53905C19.6518 6.67058 19.4681 6.74574 19.2747 6.74574C18.559 6.74574 17.9787 7.30945 17.9787 7.9953C17.9787 8.68585 18.5522 9.24674 19.2611 9.25426C19.6605 9.25802 20 9.5286 20 9.91662V12.3265C20 14.3549 18.3075 16 16.2186 16H13.0658C12.7398 16 12.4758 15.7435 12.4758 15.4269V13.3975C12.4758 13.0029 12.1567 12.6929 11.7505 12.6929C11.354 12.6929 11.0251 13.0029 11.0251 13.3975V15.4269C11.0251 15.7435 10.7611 16 10.4362 16H3.78143C1.70213 16 0 14.3558 0 12.3265V9.91662C0 9.5286 0.339458 9.25802 0.738878 9.25426C1.44874 9.24674 2.02128 8.68585 2.02128 7.9953C2.02128 7.32824 1.46035 6.8209 0.725339 6.8209C0.531915 6.8209 0.348162 6.74574 0.212766 6.61421C0.0773694 6.48268 0 6.30417 0 6.11627V3.68291C0 1.65731 1.706 0 3.7911 0H10.4362C10.7611 0 11.0251 0.256489 11.0251 0.573106V2.97827C11.0251 3.36348 11.354 3.68291 11.7505 3.68291C12.1567 3.68291 12.4758 3.36348 12.4758 2.97827V0.573106C12.4758 0.256489 12.7398 0 13.0658 0H16.2186C18.3075 0 20 1.64416 20 3.67352V6.0411C20 6.22901 19.9226 6.40752 19.7872 6.53905ZM11.7505 10.8702C12.1567 10.8702 12.4758 10.5508 12.4758 10.1656V6.40752C12.4758 6.02231 12.1567 5.70288 11.7505 5.70288C11.354 5.70288 11.0251 6.02231 11.0251 6.40752V10.1656C11.0251 10.5508 11.354 10.8702 11.7505 10.8702Z" fill="{{request()->is('credits') ? '#605BFF' : 'currentColor'}}"/>
                        </svg>
                    </span>
                    <p class="{{request()->is('credits') ? 'text-[#605BFF]' : ''}}">Credite</p>
                </div>
            </a>
            <span class="showMenuBtn rotate-90 ml-auto cursor-pointer"  onclick="displayMenu()">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg>
            </span>
        </div>
        <div class="sub-menu {{(request()->is('credits/customer-credit') or request()->is('credits/supplier-credit')) ? '' : 'hidden'}}">
            <a href="{{route('credits.customer.index')}}">
                <div class="relative pl-6 flex items-center gap-4 py-2 px-3 font-semibold text-[#030229] hover:text-[#605BFF] mr-12 my-2 rounded-[10px] cursor-pointer">
                    @if (request()->is('credits/customer-credit'))
                        <div class="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#605BFF]/20 from-5% to-transparent to-90%"></div>
                    @endif
                    <span class="ml-2">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7872 6.53905C19.6518 6.67058 19.4681 6.74574 19.2747 6.74574C18.559 6.74574 17.9787 7.30945 17.9787 7.9953C17.9787 8.68585 18.5522 9.24674 19.2611 9.25426C19.6605 9.25802 20 9.5286 20 9.91662V12.3265C20 14.3549 18.3075 16 16.2186 16H13.0658C12.7398 16 12.4758 15.7435 12.4758 15.4269V13.3975C12.4758 13.0029 12.1567 12.6929 11.7505 12.6929C11.354 12.6929 11.0251 13.0029 11.0251 13.3975V15.4269C11.0251 15.7435 10.7611 16 10.4362 16H3.78143C1.70213 16 0 14.3558 0 12.3265V9.91662C0 9.5286 0.339458 9.25802 0.738878 9.25426C1.44874 9.24674 2.02128 8.68585 2.02128 7.9953C2.02128 7.32824 1.46035 6.8209 0.725339 6.8209C0.531915 6.8209 0.348162 6.74574 0.212766 6.61421C0.0773694 6.48268 0 6.30417 0 6.11627V3.68291C0 1.65731 1.706 0 3.7911 0H10.4362C10.7611 0 11.0251 0.256489 11.0251 0.573106V2.97827C11.0251 3.36348 11.354 3.68291 11.7505 3.68291C12.1567 3.68291 12.4758 3.36348 12.4758 2.97827V0.573106C12.4758 0.256489 12.7398 0 13.0658 0H16.2186C18.3075 0 20 1.64416 20 3.67352V6.0411C20 6.22901 19.9226 6.40752 19.7872 6.53905ZM11.7505 10.8702C12.1567 10.8702 12.4758 10.5508 12.4758 10.1656V6.40752C12.4758 6.02231 12.1567 5.70288 11.7505 5.70288C11.354 5.70288 11.0251 6.02231 11.0251 6.40752V10.1656C11.0251 10.5508 11.354 10.8702 11.7505 10.8702Z" fill="{{request()->is('credits/customer-credit') ? '#605BFF' : 'currentColor'}}"/>
                        </svg>
                    </span>
                    <p class="{{request()->is('credits/customer-credit') ? 'text-[#605BFF]' : ''}}">Customer</p>
                </div>
            </a>
            <a href="{{route('credits.supplier.index')}}">
                <div class="relative pl-6 flex items-center gap-4 py-2 px-3 font-semibold text-[#030229] hover:text-[#605BFF] mr-12 my-2 rounded-[10px] cursor-pointer">
                    @if (request()->is('credits/supplier-credit'))
                        <div class="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#605BFF]/20 from-5% to-transparent to-90%"></div>
                    @endif
                    <span class="ml-2">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7872 6.53905C19.6518 6.67058 19.4681 6.74574 19.2747 6.74574C18.559 6.74574 17.9787 7.30945 17.9787 7.9953C17.9787 8.68585 18.5522 9.24674 19.2611 9.25426C19.6605 9.25802 20 9.5286 20 9.91662V12.3265C20 14.3549 18.3075 16 16.2186 16H13.0658C12.7398 16 12.4758 15.7435 12.4758 15.4269V13.3975C12.4758 13.0029 12.1567 12.6929 11.7505 12.6929C11.354 12.6929 11.0251 13.0029 11.0251 13.3975V15.4269C11.0251 15.7435 10.7611 16 10.4362 16H3.78143C1.70213 16 0 14.3558 0 12.3265V9.91662C0 9.5286 0.339458 9.25802 0.738878 9.25426C1.44874 9.24674 2.02128 8.68585 2.02128 7.9953C2.02128 7.32824 1.46035 6.8209 0.725339 6.8209C0.531915 6.8209 0.348162 6.74574 0.212766 6.61421C0.0773694 6.48268 0 6.30417 0 6.11627V3.68291C0 1.65731 1.706 0 3.7911 0H10.4362C10.7611 0 11.0251 0.256489 11.0251 0.573106V2.97827C11.0251 3.36348 11.354 3.68291 11.7505 3.68291C12.1567 3.68291 12.4758 3.36348 12.4758 2.97827V0.573106C12.4758 0.256489 12.7398 0 13.0658 0H16.2186C18.3075 0 20 1.64416 20 3.67352V6.0411C20 6.22901 19.9226 6.40752 19.7872 6.53905ZM11.7505 10.8702C12.1567 10.8702 12.4758 10.5508 12.4758 10.1656V6.40752C12.4758 6.02231 12.1567 5.70288 11.7505 5.70288C11.354 5.70288 11.0251 6.02231 11.0251 6.40752V10.1656C11.0251 10.5508 11.354 10.8702 11.7505 10.8702Z" fill="{{request()->is('credits/supplier-credit') ? '#605BFF' : 'currentColor'}}"/>
                        </svg>
                    </span>
                    <p class="{{request()->is('credits/supplier-credit') ? 'text-[#605BFF]' : ''}}">Supplier</p>
                </div>
            </a>
        </div>
        <a href="{{route('products.index')}}" class="">
            <div class="relative flex items-center gap-4 py-2 px-3 font-semibold text-[#030229] hover:text-[#605BFF] mr-12 my-2 rounded-[10px] ">
                @if (request()->is('products'))
                    <div class="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#605BFF]/20 from-5% to-transparent to-90%"></div>
                @endif
                <span class="ml-2">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="{{request()->is('products') ? '#605BFF' : 'currentColor'}}"  class="icon icon-tabler icons-tabler-filled icon-tabler-stack-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20.894 15.553a1 1 0 0 1 -.447 1.341l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 .894 -1.788l7.553 3.774l7.554 -3.775a1 1 0 0 1 1.341 .447m0 -4a1 1 0 0 1 -.447 1.341l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 .894 -1.788l7.552 3.775l7.554 -3.775a1 1 0 0 1 1.341 .447m-8.887 -8.552q .056 0 .111 .007l.111 .02l.086 .024l.012 .006l.012 .002l.029 .014l.05 .019l.016 .009l.012 .005l8 4a1 1 0 0 1 0 1.788l-8 4a1 1 0 0 1 -.894 0l-8 -4a1 1 0 0 1 0 -1.788l8 -4l.011 -.005l.018 -.01l.078 -.032l.011 -.002l.013 -.006l.086 -.024l.11 -.02l.056 -.005z" /></svg>
                </span>
                <p class="{{request()->is('products') ? 'text-[#605BFF]' : ''}}">Products</p>
            </div>
        </a>
        <a href="{{route('sales.index')}}" class="{{request()->is('sales')}}">
            <div class="relative flex items-center gap-4 py-2 px-3 font-semibold text-[#030229] hover:text-[#605BFF] mr-12 my-2 rounded-[10px]">
                @if (request()->is('sales'))
                    <div class="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#605BFF]/20 from-5% to-transparent to-90%"></div>
                @endif
                <span class="ml-2">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="{{request()->is('sales') ? '#605BFF' : 'currentColor'}}"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-stack-pop"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 9.5l-3 1.5l8 4l8 -4l-3 -1.5" /><path d="M4 15l8 4l8 -4" /><path d="M12 11v-7" /><path d="M9 7l3 -3l3 3" /></svg>
                </span>
                <p class="{{request()->is('sales') ? 'text-[#605BFF]' : ''}}">sales</p>
            </div>
        </a>
    </nav>

</aside>


<style>
    .hidden {
        /* display: none; */
        height: 0;
        transition: linear .5s ease-in-out;
        animation-delay: 1s
    }
    .turn-90 {
        transform: rotate(90deg)
    }
</style>
<script>
    const subMenuItem = document.querySelector('.sub-menu');
    const showMenuBtn = document.querySelector('.showMenuBtn')

    subMenuItem.addEventListener('click', displayMenu)
    function displayMenu () {
        console.log('Function works')
        showMenuBtn.classList.toggle("turn-90")
        subMenuItem.classList.toggle("hidden");
    }
</script>
