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


// Link btn

function redirectToInstagram() {

    window.location.href = 'https://www.instagram.com/inul.xl?igsh=MW90NzFkYXBwOWxweg%3D%3D&utm_source=qr';
}
function redirectToTelegram() {

    window.location.href = 'https://t.me/Inullllllll';
}
function redirectToWhatsapp() {

    window.location.href = 'https://wa.clck.bar/79034443749';
}
function redirectToGmail() {

    window.location.href = 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJfsczfwCNxGcFDpQnglCFmJmGjQBxhtKwlcZWPSWrqghzbBlnCLBsqGbZtFXvsWDxNdZGq';
}