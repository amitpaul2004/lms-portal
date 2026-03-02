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

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("active");
}
});

});

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