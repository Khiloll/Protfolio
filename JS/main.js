// Scroll

document.querySelectorAll('a[data-scroll]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('data-scroll');
        const target = document.querySelector(targetId);

        window.scroll({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});
