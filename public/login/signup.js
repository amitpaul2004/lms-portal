function registerUser(){

const name = document.getElementById("name").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value

if(name === "" || email === "" || password === ""){

alert("Please fill all fields")
return

}

fetch("/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name:name,
email:email,
password:password
})

})

.then(res => res.json())

.then(data => {

alert(data.message)

if(data.message === "Registered successfully"){

window.location.href = "login.html"

}

})

.catch(err => {

console.log(err)
alert("Signup failed")

})

}
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