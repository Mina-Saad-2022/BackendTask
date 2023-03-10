<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{asset('style.css')}}">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">

    <title> Guess the number</title>
</head>
<body>




<h3 id="n">{{mt_rand(1,10)}}</h3>
<h3 id="n">{{rand(1,10)}}</h3>
<h3 id="n">{{mt_rand(1,10)}}</h3>
    <script>
        var n =  document.querySelector('#n');
        console.log(n);
    </script>
{{--<form action="" method="POST">--}}
{{--    Guess a Number Between 1 and 10:--}}
{{--    <input type="text" name="number_entered" value=''/> <br><br>--}}

{{--    Result:--}}
{{--@php--}}

{{--    $number= $_POST['number_entered'];--}}

{{--    $submitbutton= $_POST['submit'];--}}


{{--    $randomnumber= mt_rand(1,10);--}}

{{--        if ($submitbutton){--}}

{{--            if (($number > 0) && ($number <11)){--}}
{{--                if ($number != $randomnumber)--}}
{{--                {--}}
{{--                    echo "Incorrect guess. The correct number was $randomnumber. Try again";--}}
{{--                }--}}
{{--                else--}}
{{--                {--}}
{{--                    echo "$randomnumber is the correct guess. You got it right.";--}}
{{--                }--}}
{{--            }--}}

{{--        }--}}

{{--@endphp--}}
{{--    <br><br>--}}
{{--    <input type="submit" name="submit" value="Search"/><br><br>--}}
{{--</form>--}}


</body>
