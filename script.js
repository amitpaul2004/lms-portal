/* cursor glow */

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",e=>{
glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";
});

/* navbar scroll */

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".premium-nav");

if(window.scrollY>50){
nav.classList.add("scrolled");
}else{
nav.classList.remove("scrolled");
}

});

/* reveal animation */



function revealOnLoad() {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}



window.addEventListener("load", revealOnLoad);
window.addEventListener("scroll", revealOnLoad);

/* magnetic buttons */

document.querySelectorAll(".magnetic").forEach(btn=>{

btn.addEventListener("mousemove",e=>{
const rect=btn.getBoundingClientRect();
const x=e.clientX-rect.left-rect.width/2;
const y=e.clientY-rect.top-rect.height/2;

btn.style.transform=`translate(${x*0.2}px,${y*0.2}px)`;
});

btn.addEventListener("mouseleave",()=>{
btn.style.transform="translate(0,0)";
});

});

/* particle network */

const canvas=document.getElementById("network");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5),
vy:(Math.random()-0.5)
});
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x+=p.vx;
p.y+=p.vy;

if(p.x<0||p.x>canvas.width)p.vx*=-1;
if(p.y<0||p.y>canvas.height)p.vy*=-1;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="#8b9cff";
ctx.fill();

particles.forEach(p2=>{

let dist=Math.hypot(p.x-p2.x,p.y-p2.y);

if(dist<120){

ctx.beginPath();
ctx.moveTo(p.x,p.y);
ctx.lineTo(p2.x,p2.y);
ctx.strokeStyle="rgba(139,156,255,0.2)";
ctx.stroke();

}

});

});

requestAnimationFrame(animate);
}

animate();
const modal = document.getElementById('videoModal');
const video = document.getElementById('demoVideo');

modal.addEventListener('hidden.bs.modal', function () {
video.pause();
video.currentTime = 0;
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");
const count = +counter.innerText;

const increment = target / 200;

if(count < target){
counter.innerText = Math.ceil(count + increment);
setTimeout(updateCounter, 10);
}
else{

if(target === 50000){
counter.innerText = "50K+";
}
else if(target === 1200){
counter.innerText = "1,200+";
}
else if(target === 98){
counter.innerText = "98%";
}

}

};

updateCounter();

});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
reveals.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("active");
}
});
}



function revealOnScroll(){
reveals.forEach((el)=>{
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
el.classList.add("active");
}
});
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-animated");

window.addEventListener("scroll", () => {

let currentSection = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;
const sectionHeight = section.clientHeight;

if (scrollY >= sectionTop) {
currentSection = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + currentSection){
link.classList.add("active");
}

});

});
const courseCards = document.querySelectorAll(".feature-card");

function revealCards(){

const triggerBottom = window.innerHeight - 100;

courseCards.forEach((card, index)=>{

const cardTop = card.getBoundingClientRect().top;

if(cardTop < triggerBottom){

setTimeout(()=>{
card.classList.add("show");
}, index * 150); // stagger delay

}

});

}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);


