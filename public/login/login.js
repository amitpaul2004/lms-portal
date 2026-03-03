// PARTICLES
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true },
    color: { value: "#ffffff" }
  }
});

// LOGIN
async function loginUser(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const res = await fetch("/login",{
  method:"POST",
  credentials: "include",  // 🔥 IMPORTANT
  headers:{ "Content-Type":"application/json" },
  body:JSON.stringify({email,password})
});
const data = await res.json();

if(res.ok){
  alert("Login successful!");
  window.location.href="/index.html";
}else{
  alert(data.message);   // User not found OR Wrong password
}
}

// REGISTER
async function registerUser(){

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const res = await fetch("/register",{
  method:"POST",
  headers:{ "Content-Type":"application/json" },
  body:JSON.stringify({name,email,password})
});

const data = await res.json();

if(res.ok){
  alert("Account created successfully!");
  window.location.href="login.html";
}else{
  alert(data.message);
}
}