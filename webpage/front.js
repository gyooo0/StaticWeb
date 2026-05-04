$(document).ready(function () {
    $('.burger').click(function () {
        $('.links').toggleClass('active');
    });

    $('.dropdown > a').click(function (e) {
        e.preventDefault();
        $(this).siblings('.menu').toggleClass('active');
    });
});