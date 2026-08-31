<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/perfil', function () {
    return view('representantes/perfil');
});


Route::get('/representantes', function () {
    return view('representantes/representantes');
});

Route::get('/proposicao', function () {
    return view('proposicoes.show');
});


Route::get('/votacao', function () {
    return view('votacoes.show');
});


Route::get('/glossario', function () {
    return view('glossario.index');
});

Route::get('/comparacao', function () {
    return view('comparacao.index');
});