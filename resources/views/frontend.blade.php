<!DOCTYPE html>
<html  lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/frontend.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="relative font-inter font-normal text-base leading-[1.8] bg-bodyBg dark:bg-bodyBg-dark">
        @inertia
        

        {{-- @vite(['resources/edurock/edurock/assets/js/main.js']) --}}

        <script defer src="/edurock/edurock/assets/js/main.js"></script>
    </body>
</html>
