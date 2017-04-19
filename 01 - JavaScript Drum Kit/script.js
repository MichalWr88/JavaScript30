  var key = document.querySelectorAll(".key");




key.forEach(function (button) {
  button.addEventListener("click", function () {
   button.classList.add("playing");
   setTimeout(function() {
        key.classList.remove("playing");

      },100);
  },false);

  button.addEventListener("mouseleave", function () {
   button.classList.remove("playing");
  },false);
});
window.addEventListener("keydown", function (e) {
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if(!audio)   return;   
      audio.currentTime = 0;
      audio.play(); 
      key.classList.add("playing");
      setTimeout(function() {
        key.classList.remove("playing");

      },100);


});