<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="{{ asset('images/logo.png')}}" type="image/x-icon">
    @vite('resources/css/app.css')
    @stack('styles')
    <title>@yield('title', 'Dashboard')</title>
</head>
<body class="font-[Nunito]">
    <div class="dash flex h-screen bg-[#FAFAFB]">
        <div class="sidebare bg-white">
            @include('components.sidebar')
        </div>
        <main class="w-full ">
            @yield('content')
        </main>
    </div>

    @stack('scripts')
</body>
</html>
