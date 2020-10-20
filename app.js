// key assignments
var op;
var first;
var second;

$('.btn').click(function () {
    var firstNum = $('.input').val() //
    var numbers = $(this).html();
    firstNum += numbers;
    $('.input').val(firstNum);
})

function firstValue() {
    first = parseFloat($('.input').val()); // first value - global variable
    $('.input').val(''); // pend next key

}

$('.operation').click(function () {
    firstValue(); // pend second number
    secValue = parseFloat($('.input').val());
    var operation = $(this).html();
    op = operation //global var for equal


})

$('.equal').click(function () { // fix equal alone
    var second = parseFloat($('.input').val());

    if (op === "+") {
        $('.input').val(first + second);
    }
    else if (op === "-") {
        $('.input').val(first - second);
    }
    else if (op === "*") {
        $('.input').val(first * second);
    }


    else if (op === "/") {
        $('.input').val(first / second);
    }
    else {
        $('.input').val('')
    }
})

$('.clear').click(function () {
    $('.input').val('');
})