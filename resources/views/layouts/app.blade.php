<!doctype html>
<html lang="pt-BR">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="description" content="Protótipo acadêmico para consulta acessível de dados parlamentares.">
    <title>
        @yield('title', 'Democracia em Rede')
    </title>
    
    @vite([
        'resources/css/app.css',
        'resources/js/app.js'
    ])

    @stack('styles')
</head>

<body data-page="@yield('page', 'home')">
    
    @include( 'partials.header' )
 
    
    @yield( 'content' )
    

    @include( 'partials.footer' )

    @stack( 'scripts' )

</body>

</html>