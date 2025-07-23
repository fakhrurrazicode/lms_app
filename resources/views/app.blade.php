<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Light mode favicon -->
        <link rel="icon" href="{{ asset('favicon-light.ico') }}" media="(prefers-color-scheme: light)">

        <!-- Dark mode favicon -->
        <link rel="icon" href="{{ asset('favicon-dark.ico') }}" media="(prefers-color-scheme: dark)">
        

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia


        <!-- Event snippet for Pembelian conversion page -->
        <script>
        gtag('event', 'conversion', {
            'send_to': 'AW-17006564055/SuSaCJLfhdoaENelrq0_',
            'transaction_id': ''
        });
        </script>


        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M9SB8ZCB81"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-M9SB8ZCB81');
        </script>

        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17006564055"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-17006564055');
        </script>

        {{-- <script>
            window.tinyMCEPreInit = {
                base: '/tinymce',
                suffix: '.min'
            };
        </script> --}}


    </body>
</html>
