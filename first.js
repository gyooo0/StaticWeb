$(document).ready(function () {
    $('.burger').click(function () {
        $('.links').toggleClass('active');
        $('.burger').toggleClass('active');
    });
});