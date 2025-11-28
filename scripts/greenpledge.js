(function () {
    emailjs.init("YOUR_PUBLIC_KEY"); // replace with your EmailJS Public Key
})();

document.getElementById("sendSuggestion").addEventListener("click", function () {
    const message = document.getElementById("suggestion").value.trim();
    const feedback = document.getElementById("feedback");

    if (message === "") {
        feedback.style.color = "red";
        feedback.textContent = "Tolong tuliskan saran sebelum mengirim!";
        return;
    }

    emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            message: message,
            to_email: "alexandra.shenyyy@gmail.com" // optional if template already defines this
        })
        .then(
            function () {
                feedback.style.color = "green";
                feedback.textContent = "Saranmu berhasil dikirim! Terima kasih 🌱";
                document.getElementById("suggestion").value = "";
            },
            function (error) {
                feedback.style.color = "red";
                feedback.textContent = "Gagal mengirim. Silakan coba lagi.";
                console.log(error);
            }
        );
});


// fade-in animation
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));
