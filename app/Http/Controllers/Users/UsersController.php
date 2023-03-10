<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Support\Arr;

class UsersController extends Controller
{
    public function index(){
//        $pins = array();
//        for ($j=0; $j < $number; $j++) {
//            $string = str_random(5);
//            $pin = Pin::where('pin', '=', $string)->first();
//            if($pin){
//                $j--;
//            }else{
//                $pins[$j] = $string;
//            }
//        }
        $array = [0, 1, 2, 3, 4,5,6,7,8,9];

        $random = Arr::random($array);

//        return $pins;

        return view('index');
    }

}
