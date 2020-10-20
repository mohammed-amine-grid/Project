$('.btn').click(function () {
    var first_num = $('.input').val()
    var number = $(this).html();
    first_num += number;
    $('.input').val(first_num);
})

function first_equal() {
    start_value = parseFloat($('.input').val());
    $('.input').val('');

}

$('.operation').click(function () {
    first_equal();
    sec_value = parseFloat($('.calculate_field').val());
    var operation = $(this).html();
    op = operation;
    console.log(operation);

})

$('.equal').click(function () {
    second_value = parseFloat($('.calculate_field').val());
    if (op === "+") {
        $('.calculate_field').val(start_value + second_value);
    }
    else if (op === "-") {
        $('.calculate_field').val(start_value - second_value);
    }
    else if (op === "*") {
        $('.calculate_field').val(start_value * second_value);
    }
    else if (op === "/") {
        $('.calculate_field').val(start_value / second_value);
    }
})
