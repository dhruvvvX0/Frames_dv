// --- 1. SHOW ALL IMAGES ---
const showAllBtn = document.getElementById('show-all-btn');
const hiddenItems = document.querySelectorAll('.grid-item.is-hidden');

if(showAllBtn) {
    showAllBtn.onclick = () => {
        hiddenItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.remove('is-hidden');
                item.classList.add('reveal-anim');
            }, index * 100);
        });
        showAllBtn.parentElement.style.display = 'none';
    };
}

// --- 2. LIGHTBOX & SCROLL LOCK ---
const lb = document.getElementById('lightbox'), lbi = document.getElementById('lightbox-img'), body = document.body;
let scrollPos = 0;

document.querySelectorAll('.grid-item').forEach(i => {
    i.onclick = () => {
        scrollPos = window.pageYOffset;
        lb.style.display = "flex";
        lbi.src = i.dataset.src;
        body.classList.add('no-scroll');
    };
});

const closeLB = () => {
    lb.style.display = "none";
    body.classList.remove('no-scroll');
    window.scrollTo(0, scrollPos);
};

document.querySelector('.close-lightbox').onclick = closeLB;
lb.onclick = (e) => { if(e.target === lb) closeLB(); };

// --- 3. AUTO YEAR ---
document.getElementById('year').innerText = new Date().getFullYear();
// 4. YEAR
document.getElementById('year').innerText = new Date().getFullYear();
