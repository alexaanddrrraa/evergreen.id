const facts = [
    "Satu botol minum isi ulang menggantikan ratusan botol plastik tiap tahun.",
    "Hutan tropis menyimpan karbon paling besar per hektare.",
    "Pohon dewasa menyerap ratusan kg CO₂ sepanjang hidupnya.",
    "Lampu LED menghemat energi hingga 75%.",
    "Makanan nabati punya jejak karbon lebih kecil daripada daging.",
    "1/3 makanan dunia terbuang sebelum dikonsumsi.",
    "Pohon kota menurunkan suhu melalui evapotranspirasi.",
    "Daur ulang aluminium menghemat 95% energi.",
    "Mengurangi makan daging menurunkan jejak karbon rumah tangga.",
    "Plastik laut masuk ke rantai makanan manusia."
];

let lastIndex = -1;

const factEl = document.getElementById('dny-fact');
const cardEl = document.getElementById('dny-card');
const indexEl = document.getElementById('dny-index');
const btnNew = document.getElementById('dny-new');
const btnCopy = document.getElementById('dny-copy');
const btnShare = document.getElementById('dny-share');

function pickRandomIndex() {
    let idx;
    do {
        idx = Math.floor(Math.random() * facts.length);
    } while (idx === lastIndex);
    lastIndex = idx;
    return idx;
}

function showFact(idx) {
    factEl.style.opacity = 0;
    factEl.style.transform = 'translateY(6px)';

    setTimeout(() => {
        factEl.textContent = facts[idx];
        indexEl.textContent = `${idx + 1} / ${facts.length}`;
        factEl.style.opacity = 1;
        factEl.style.transform = 'translateY(0)';
    }, 150);
}

function showRandomFact() {
    const idx = pickRandomIndex();
    showFact(idx);
}

async function copyFact() {
    await navigator.clipboard.writeText(factEl.textContent);
    btnCopy.textContent = "✓ Copied";

    setTimeout(() => {
        btnCopy.textContent = "📋 Copy";
    }, 1300);
}

async function shareFact() {
    if (navigator.share) {
        await navigator.share({
            title: "Did you know?",
            text: factEl.textContent
        });
    } else {
        copyFact();
    }
}

btnNew.addEventListener('click', showRandomFact);
btnCopy.addEventListener('click', copyFact);
btnShare.addEventListener('click', shareFact);

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'n') {
        showRandomFact();
    }
});

// initial fact
setTimeout(showRandomFact, 200);

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
