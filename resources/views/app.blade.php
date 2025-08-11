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

        <!-- Meta Pixel Code -->
        <script>
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1308162444043812');
            fbq('track', 'PageView');
        </script>
        <noscript>
            <img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=1308162444043812&ev=PageView&noscript=1"/>
        </noscript>
        <!-- End Meta Pixel Code -->


        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17006564055"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17006564055'); // ID Google Ads / Analytics
        </script>
        
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia


        {{-- <!-- Event snippet for Pembelian conversion page -->
        <script>
        gtag('event', 'conversion', {
            'send_to': 'AW-17006564055/SuSaCJLfhdoaENelrq0_',
            'transaction_id': ''
        });
        </script> --}}


        {{-- <!-- Google tag (gtag.js) -->
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
        </script> --}}

        {{-- <script>
            window.tinyMCEPreInit = {
                base: '/tinymce',
                suffix: '.min'
            };
        </script> --}}





    </body>
</html>
