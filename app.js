$('.btn').click(function () {
    var first_num = $('.calculate_field').val()
    var number = $(this).html();
    first_num += number; $('.calculate_field').val(first_num);
})