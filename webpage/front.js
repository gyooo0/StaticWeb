//for the burger menu and dropdown menu
$(document).ready(function () {
    $('.burger').click(function () {
        $('.links').toggleClass('active');
    });

    $('.dropdown > a').click(function (e) {
        e.preventDefault();
        $(this).siblings('.menu').toggleClass('active');
    });
});


// click to flip cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        this.classList.toggle('flipped');
    });
});
