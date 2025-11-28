// ===============================
// QUIZ DATA
// ===============================
const quizData = [
    {
        question: "Apa yang dimaksud dengan Revolusi Industri?",
        answers: [
            { text: "Perubahan besar dalam produksi dari tenaga manusia ke mesin", correct: true },
            { text: "Pertumbuhan hutan secara alami", correct: false },
            { text: "Penanaman pohon secara massal", correct: false },
            { text: "Peningkatan polusi di kota besar", correct: false }
        ]
    },
    {
        question: "Apa salah satu cara melindungi lingkungan sehari-hari?",
        answers: [
            { text: "Membuang sampah sembarangan", correct: false },
            { text: "Menggunakan tas kain dan mengurangi plastik sekali pakai", correct: true },
            { text: "Menebang pohon tanpa izin", correct: false },
            { text: "Membuang limbah ke sungai", correct: false }
        ]
    },
    {
        question: "Hutan memiliki peran penting, kecuali…",
        answers: [
            { text: "Menyerap karbon", correct: false },
            { text: "Menjaga keanekaragaman hayati", correct: false },
            { text: "Meningkatkan urbanisasi cepat", correct: true },
            { text: "Mengurangi risiko bencana alam", correct: false }
        ]
    }
];


// ===============================
// QUIZ LOGIC
// ===============================
let currentQuestion = 0;
let score = 0;

// Get Elements
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.querySelector(".score-display");

function loadQuestion() {
    feedbackEl.textContent = "";
    nextBtn.style.display = "none";

    const current = quizData[currentQuestion];
    questionEl.textContent = current.question;
    answersEl.innerHTML = "";

    current.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.classList.add("btn", "btn-outline-success", "answer-btn");
        btn.textContent = answer.text;
        btn.onclick = () => selectAnswer(answer);
        answersEl.appendChild(btn);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        feedbackEl.textContent = "✅ Correct!";
        score += 1;
    } else {
        feedbackEl.textContent = "❌ Wrong!";
    }

    scoreEl.textContent = `Score: ${score}`;
    Array.from(answersEl.children).forEach(btn => btn.disabled = true);
    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "🎉 Quiz Finished!";
        answersEl.innerHTML = "";
        feedbackEl.textContent = `Your final score is ${score} out of ${quizData.length}! 🌱`;
        nextBtn.style.display = "none";
    }
};

loadQuestion();


// ===============================
// FADE-IN SCROLL ANIMATION
// ===============================
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));
