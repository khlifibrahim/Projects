<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite('resources/css/app.css')
    <title>Login</title>
</head>
<body class="bg-[#E5E5E5]">
    <div class=" h-screen  flex items-center justify-between ">
        <div class="side h-full basis-[30%] flex flex-col items-center justify-center bg-white max-[720px]:basis-full">
            <div class="head flex flex-col items-center gap-5">
                <img src="{{ asset('images/logo.png')}}" class="w-[80%]" alt="">
                <p class="font-semibold text-[24px]">Login</p>
            </div>
            <form action="" class="flex flex-col gap-4 px-[32px] text-[#030229]">
                <div class="flex flex-col gap-2">
                    <label for="" class="font-[16px]">Email</label>
                    <input class="bg-[#E5E5E5] w-[348px] h-[50px] rounded-[10px] px-[12px] focus:outline-[#605BFF]" type="email" placeholder="Enter your email">
                </div>
                <div class="flex flex-col gap-2">
                    <label for="" class="font-[16px]">Password</label>
                    <input class="bg-[#E5E5E5] w-[348px] h-[50px] rounded-[10px] px-[12px] focus:outline-[#605BFF]" type="password" placeholder="Enter your password">
                </div>
                <div class="remember-me flex justify-between">
                    <label class="flex gap-2" class="font-[16px]">
                        <input type="checkbox">
                        <p>Remember me.</p>
                    </label>
                    <a href="#">
                        <p class="font-[16px] text-[#605BFF]">Forgot your password?</p>
                    </a>
                </div>
                <div class="submit-btn">
                    <input class="w-full h-[50px] bg-[#605BFF] rounded-[10px] text-white mt-8 cursor-pointer" type="submit" value="Login">
                </div>
            </form>
        </div>
        <div class="cover h-full w-full basis-[70%] flex items-center justify-center max-[720px]:hidden">
            <div class="img-cover w-1/2 max-lg:w-full max-lg:mx-auto">
                <img src="{{ asset('images/login.svg')}}" alt="">
            </div>
        </div>
    </div>
</body>
</html>
