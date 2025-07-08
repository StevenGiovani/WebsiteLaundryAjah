document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah terkirim.");
    this.reset();
});
