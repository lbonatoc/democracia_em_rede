<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'home')->name('home');

Route::view('/representantes', 'representantes.index')->name('representantes.index');

Route::view('/perfil', 'representantes.show')->name('representantes.show');

Route::view('/proposicao', 'proposicoes.show')->name('proposicoes.show');

Route::view('/votacao','votacoes.show')->name('votacoes.show');

Route::view('/glossario', 'glossario.index')->name('glossario.index');

Route::view('/comparacao', 'comparacao.index')->name('comparacao.index');