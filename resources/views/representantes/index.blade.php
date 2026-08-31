@extends('layouts.app')

@section('title', 'Representantes | Democracia em Rede ')

@section('page', 'representantes')

@section('content')
<main id="app" tabindex="-1">
    <div class="container page">
        <div class="skeleton-grid">
            <div class="skeleton"></div>
            <div class="skeleton"></div>
            <div class="skeleton"></div>
        </div>
    </div>
</main>
<aside class="compare-bar" id="compare-bar" aria-label="Selecionados para comparação" hidden></aside>
<div class="toast" id="toast" role="status" aria-live="polite"></div>
@endsection