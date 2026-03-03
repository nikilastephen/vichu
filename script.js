// Typing Animation
const text = "Chinna 🤎 This World Is Created By Your Chinnu...";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 60);
  }
}
typeEffect();

// Enter Site
function enterSite() {
  document.getElementById("welcomeSection").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");
  document.getElementById("lovePopup").classList.remove("hidden");
}

// Close Popup
function closePopup() {
  document.getElementById("lovePopup").classList.add("hidden");
}

// Messages
function showMessage(n) {
  let msg = "";
  if(n==1)
    msg="Chinna 🤎 You are the most handsome, talented and creative man. Your heart is rare and beautiful.";
  if(n==2)
    msg="You are my strength when I feel weak. My comfort when I feel low. My happiness every single day ✨";
  if(n==3)
    msg="No matter what happens, your Chinnu is always here for you. Our bond is forever 💕";
  document.getElementById("messageBox").innerHTML = msg;
}

// Secret Unlock with Fireworks
function unlockLove() {
  let pass = document.getElementById("password").value;
  if(pass === "kutty") {
    document.getElementById("secretMessage").innerHTML =
    "You are the most beautiful, handsome, good hearted, pure soul in this world 🤎✨ My pride. My happiness. My Chinna forever.";
    fireworks();
  } else {
    document.getElementById("secretMessage").innerHTML = "Wrong password 🥺 Try again Chinna!";
  }
}

// Dark Mode
function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

// Floating Hearts Generator
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "🤎";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random()*20) + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 800);

// Sparkle Cursor
const canvas = document.getElementById("sparkCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.addEventListener("mousemove", e => {
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(e.clientX, e.clientY, 2, 0, Math.PI*2);
  ctx.fill();
});

// Fireworks Effect
function fireworks(){
  for(let i=0;i<50;i++){
    const spark=document.createElement("div");
    spark.classList.add("heart");
    spark.innerHTML="✨";
    spark.style.left=Math.random()*100+"vw";
    spark.style.fontSize="20px";
    document.body.appendChild(spark);
    setTimeout(()=>spark.remove(),3000);
  }
}