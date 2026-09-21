<a class="skip" href="#app">Pular para o conteúdo</a>
<header class="header">
    <div class="container header-row">
        <a class="brand" href="/">
            <span class="logo-slot" aria-hidden="true">LOGO</span>
            <span>
                <strong>Democracia em Rede</strong>
                <small>Dados para compreender</small>
            </span>
        </a>
        <nav class="nav" aria-label="Navegação principal">
            <a href="{{ route('home') }}" @if(request()->routeIs('home')) aria-current="page" @endif>Início</a>
            <a href="{{ route('representantes.index') }}" @if(request()->routeIs('representantes.*')) aria-current="page" @endif>Representantes</a>
            <a href="{{ route('comparacao.index') }}" @if(request()->routeIs('comparacao.*')) aria-current="page" @endif>Comparar</a>
            <a href="{{ route('glossario.index') }}" @if(request()->routeIs('glossario.*')) aria-current="page" @endif>Glossário</a>
        </nav>
        <form class="header-search" data-search role="search">
            <label class="sr-only" for="header-q">Pesquisar representante</label>
            <input id="header-q" name="q" placeholder="Buscar representante">
            <button aria-label="Pesquisar">⌕</button>
        </form>
        <button class="menu" id="menu" aria-expanded="false" aria-controls="mobile" aria-label="Abrir menu">☰</button>
    </div>
    <div class="mobile" id="mobile" hidden>
        <nav>
            <a href="{{ route('home') }}" @if(request()->routeIs('home')) aria-current="page" @endif>Início</a>
            <a href="{{ route('representantes.index') }}" @if(request()->routeIs('representantes.*')) aria-current="page" @endif>Representantes</a>
            <a href="{{ route('comparacao.index') }}" @if(request()->routeIs('comparacao.*')) aria-current="page" @endif>Comparar</a>
            <a href="{{ route('glossario.index') }}" @if(request()->routeIs('glossario.*')) aria-current="page" @endif>Glossário</a>
        </nav>
        <form data-search>
            <label class="sr-only" for="mobile-q">Pesquisar representante</label>
            <input id="mobile-q" name="q" placeholder="Buscar representante">
            <button>Buscar</button>
        </form>
    </div>
</header>
<div class="notice">
    <div class="container">
        <span class="dot"></span>
        <span>Protótipo acadêmico: registros demonstrativos, sem consulta em tempo real.</span>
    </div>
</div>