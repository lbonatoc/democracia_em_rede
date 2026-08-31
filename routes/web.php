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

Route::get('/proposicoes', function () {
    return view('proposicoes.show');
});