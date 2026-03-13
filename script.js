// 1. PARTICLE BG
const canvas = document.getElementById('bg-animation');
const ctx = canvas.getContext('2d');
let particles = [];
function init() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
class P {
    constructor() { this.reset(); }
    reset() { this.x = Math.random()*canvas.width; this.y = Math.random()*canvas.height; this.s = Math.random()*1.2; this.sx = Math.random()*0.4-0.2; this.sy = Math.random()*0.4-0.2; this.o = Math.random()*0.5; }
    up() { this.x+=this.sx; this.y+=this.sy; if(this.x<0||this.x>canvas.width||this.y<0||this.y>canvas.height) this.reset(); }
    dr() { ctx.fillStyle=`rgba(255,255,255,${this.o})`; ctx.beginPath(); ctx.arc(this.x,this.y,this.s,0,Math.PI*2); ctx.fill(); }
}
function anim() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p=>{p.up();p.dr();}); requestAnimationFrame(anim); }
init(); particles=Array.from({length:80},()=>new P()); anim(); window.onresize=init;

// 2. SHOW ALL BUTTON
const showAllBtn = document.getElementById('show-all-btn');
const hiddenItems = document.querySelectorAll('.grid-item.is-hidden');
showAllBtn.onclick = () => {
    hiddenItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.remove('is-hidden');
            item.classList.add('reveal-anim');
        }, index * 100);
    });
    showAllBtn.classList.add('fade-out');
    setTimeout(() => showAllBtn.style.display = 'none', 400);
};

// 3. LIGHTBOX
const lb = document.getElementById('lightbox'), lbi = document.getElementById('lightbox-img'), cap = document.getElementById('caption');
document.querySelectorAll('.grid-item').forEach(i => {
    i.onclick = () => { lb.style.display="block"; lbi.src=i.dataset.src; cap.innerText=i.dataset.caption; document.body.style.overflow="hidden"; }
});
document.querySelector('.close-lightbox').onclick = () => { lb.style.display="none"; document.body.style.overflow="auto"; }
lb.onclick = (e) => { if(e.target === lb) { lb.style.display="none"; document.body.style.overflow="auto"; } }

// 4. YEAR
document.getElementById('year').innerText = new Date().getFullYear();
