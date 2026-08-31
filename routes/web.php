<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::get('/perfil', function () {
    return view('representantes/perfil');
});

