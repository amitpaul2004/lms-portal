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
function loginUser(){

const email = document.getElementById("email").value
const password = document.getElementById("password").value

fetch("/login",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email:email,
password:password
})

})

.then(res=>res.json())

.then(data=>{

if(data.message === "Login successful"){

alert("Login Successful")

window.location.href="/"

}else{

alert(data.message)

}

})

.catch(err=>{
console.log(err)
alert("Server error")
})

}