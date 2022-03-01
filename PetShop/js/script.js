
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 1615) {
    document.getElementById("sticky").style.display="block";
    document.getElementById("sticky").style.animation=("rolling-in 3s");
    document.getElementById("sticky").style.transform= "translateX(-55vw)"; 
  } else{
    document.getElementById("sticky").style.animation=("rolling-back 3s");
    document.getElementById("sticky").style.transform= "translateX(55vw)"; 
  }
});
