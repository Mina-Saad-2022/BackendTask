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
<div class="container">
    <div class="row ">

        <div class="col-6 p-2 ">
            <form>
                <fieldset class="scheduler-border border">
                    <legend class="scheduler-border">Your Part</legend>
                    <div class="text-center">
                        <h3>ID :
                            <span class="text-primary"> {{rand(200,300)}} </span>
                        </h3>
                    </div>
                    <div class="text-center">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input mina" type="radio" name="inlineRadioOptions" id="inlineRadio0"
                                   value="0" >
                            <label class="form-check-label" for="inlineRadio0">0</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                   value="1">
                            <label class="form-check-label" for="inlineRadio1">1</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                   value="2">
                            <label class="form-check-label" for="inlineRadio2">2</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                   value="3">
                            <label class="form-check-label" for="inlineRadio3">3</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4"
                                   value="4">
                            <label class="form-check-label" for="inlineRadio4">4</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"
                                   value="5">
                            <label class="form-check-label" for="inlineRadio5">5</label>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>

        <div class="col-5 p-2">
            <fieldset class="scheduler-border border ">
                <legend class="scheduler-border ">the other player Part</legend>

                <div class="text-center">
                    <label class="form-check-label m-auto" for="inlineRadio0">ID : <span class="text-primary">
                    {{rand(200,300)}}
                </span>
                    </label>
                    <input disabled class="form-control col-6 m-auto" type="text" name="inlineRadioOptions"
                           id="inlineRadio8"
                           value='0'>
                </div>

            </fieldset>
        </div>

    </div>
        <div class="row ">
            <div class="col-9 p-3 m-auto">
                <button type="submit" onclick="number()" class="btn btn-primary col-4 m-auto m-auto">Submit</button>
            </div>
        </div>
    </div>

<div class="result">
    <ul id="result">

    </ul>
</div>
    {{--        <div class="col-7">--}}
    {{--            <p id="outputText">Enter a number below</p>--}}
    {{--        </div>--}}

    {{--        <div class="col-7">--}}
    {{--            <p> number of attempts :--}}
    {{--            <span class="num"></span>--}}
    {{--            </p>--}}
    {{--        </div>--}}
    {{--    </div>--}}
    {{--    <div class="col-7">--}}
    {{--        <div class="input-group ">--}}
    {{--            <input type="number" id="userInput" class="form-control" placeholder="guess your number"--}}
    {{--                   aria-label="type your number" aria-describedby="basic-addon2">--}}
    {{--            <div class="input-group-append">--}}
    {{--                <button id="enterButton" class="btn btn-outline-success  font-weight-bold" type="submit">--}}
    {{--                    guess the number--}}
    {{--                </button>--}}
    {{--                <button id="againButton" class="btn btn-outline-danger  font-weight-bold" type="button">--}}
    {{--                    Play again--}}
    {{--                </button>--}}
    {{--            </div>--}}
    {{--        </div>--}}
</div>


<script src="{{asset('javascript.js')}}"></script>

</body>
</html>
