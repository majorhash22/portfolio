// Always start at top (Hero Section Fix)
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);

  loader.style.opacity = "0";
  loader.style.transition = "0.5s ease";

  setTimeout(() => {
    loader.style.display = "none";

    // Show hero elements safely
    document.querySelectorAll('.hero .hidden')
      .forEach(el => el.classList.add('show'));

  }, 500);
});


// Ensure page always starts at top (hero section)
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});


const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  loader.style.opacity = "0";
  loader.style.transition = "0.5s ease";
  
  setTimeout(() => {
    loader.style.display = "none";
    
    // Manually trigger hero visibility after loader is gone
    const heroElements = document.querySelectorAll('.hero .hidden');
    heroElements.forEach(el => el.classList.add('show'));
  }, 500);
});

// Scroll Progress
window.addEventListener("scroll",()=>{
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / height) * 100;
  document.getElementById("progress").style.width = progress + "%";
});

// Smooth Scroll
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// Scroll Reveal
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el=>{
  observer.observe(el);
});

// Mouse Glow
const glow = document.getElementById("glow");

document.addEventListener("mousemove", e=>{
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Cursor
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Particles Resize Fix
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Simple particles
let particles = [];

for(let i=0;i<80;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2,
    dx:(Math.random()-0.5)*0.5,
    dy:(Math.random()-0.5)*0.5
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle="rgba(78,168,222,0.6)";
  particles.forEach(p=>{
    p.x+=p.dx;
    p.y+=p.dy;

    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

// Active nav highlight on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

animate();
// Start particles AFTER everything is ready
requestAnimationFrame(animate);
