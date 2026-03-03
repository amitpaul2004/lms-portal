
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const path = require("path");

const User = require("./models/User");
const Enrollment = require("./models/Enrollment");

const app = express();



// ================= DATABASE =================
mongoose.connect("mongodb://127.0.0.1:27017/learnflow")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// ================= MIDDLEWARE =================
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
  secret:"lmssecret",
  resave:false,
  saveUninitialized:false
}));

app.use(express.static(path.join(__dirname,"public")));

// ================= REGISTER =================
app.post("/register", async (req,res)=>{
  const {name,email,password} = req.body;

  const hashed = await bcrypt.hash(password,10);

  const user = new User({
    name,
    email,
    password:hashed
  });

  await user.save();

  res.json({message:"Registered successfully"});
});

// ================= LOGIN =================
app.post("/login", async (req,res)=>{
  const {email,password} = req.body;

  const user = await User.findOne({email});
  if(!user){
    return res.status(400).json({message:"User not found. Please sign up."});
  }

  const valid = await bcrypt.compare(password,user.password);
  if(!valid){
    return res.status(400).json({message:"Incorrect password"});
  }

  req.session.userId = user._id;
  res.json({message:"Login successful"});
});
// ================= ENROLL =================
app.post("/enroll", async (req,res)=>{

  console.log("Session userId:", req.session.userId);

  if(!req.session.userId){
    return res.status(401).json({message:"Please login first"});
  }

  const {courseName} = req.body;

  const enrollment = new Enrollment({
    userId:req.session.userId,
    courseName
  });

  await enrollment.save();

  res.json({message:"Enrolled Successfully"});
}); 

// ================= CHECK LOGIN =================
app.get("/check-auth",(req,res)=>{
  if(req.session.userId){
    res.json({loggedIn:true});
  }else{
    res.json({loggedIn:false});
  }
});
// ================= LOGOUT =================
app.get("/logout",(req,res)=>{
  req.session.destroy(()=>{
    res.json({message:"Logged out"});
  });
});

app.listen(3000,()=>{
  console.log("Server running on http://localhost:3000");
});