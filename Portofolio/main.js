document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;

    console.log("Formulir dikirim!");
    console.log("Nama:", nama);
    console.log("Email:", email);

    alert("Terima kasih, " + nama + "! Pesan anda telah terkirim.");

    contactForm.reset();
  });
});