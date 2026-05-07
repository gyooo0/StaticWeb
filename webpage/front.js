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

// fade in images and wolfinfo when 5% of their section is visible
const sections = document.querySelectorAll('.wolf, .dragon');

sections.forEach(section => {
    const items = section.querySelectorAll('.card, .wolfinfo');
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(24px)';
        item.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    });
});

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.card, .wolfinfo');
            items.forEach((item, i) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, i * 120);
            });
            sectionObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.05 });

sections.forEach(section => sectionObserver.observe(section));
