var hHand = document.querySelector(".hours-hand");
var hWrapper = document.querySelector(".hours-wrapper");
var mHand = document.querySelector(".minutes-hand");
var mWrapper = document.querySelector(".minutes-wrapper");
var sHand = document.querySelector(".seconds-hand");
var sWrapper = document.querySelector(".seconds-wrapper");

function setTime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var currentSec = h * 60 * 60 + m * 60 + s;
  var totalSec = 24 * 60 * 60;
  var hProgress = currentSec / totalSec;
  var hAngle = hProgress * 720;
  var mProgress = (m * 60 + s) / (60 * 60);
  var mAngle = mProgress * 360;
  var sProgress = s / 60;
  var sAngle = sProgress * 360;

  hHand.style.transform = "rotate(" + hAngle + "deg) translateY(-36%)";
  mHand.style.transform = "rotate(" + mAngle + "deg) translateY(-38%)";
  sHand.style.transform = "rotate(" + sAngle + "deg) translateY(-34%)";

  triggerReflow();

  // console.log('time set');
}

function triggerReflow() {
  hWrapper.classList.remove("running");
  hWrapper.offsetHeight;
  hWrapper.classList.add("running");

  mWrapper.classList.remove("running");
  mWrapper.offsetHeight;
  mWrapper.classList.add("running");

  sWrapper.classList.remove("running");
  sWrapper.offsetHeight;
  sWrapper.classList.add("running");
}

setTime();

window.onfocus = setTime;
