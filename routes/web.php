<?php

use App\Http\Controllers\Users\UsersController ;
use Illuminate\Support\Facades\Route;




Route::group(['prefix'=>'game.restart-technology','as'=>'index.'], function(){
    Route::get('/', [UsersController::class ,'index'])->name('index');
});



Route::get('/', function () {
    return redirect(\route('index.index'));
});

Route::get('/new', function () {
    return view('new');
});
