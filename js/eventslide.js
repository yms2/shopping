let curPos = 0;
let postion = 0;
const IMAGE_WIDTH = 695;
const prevBtn = document.querySelector(".prev1")
const nextBtn = document.querySelector(".next1")
const images = document.querySelector(".banner")
 
function prev(){
  if(curPos > 0){
    nextBtn.removeAttribute("disabled")
    postion += IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    images.style.transition = `${0.5}s ease-out`;
    curPos = curPos - 1;
  }
  if(curPos == 0){
    prevBtn.setAttribute('disabled', 'true')
  }
}
function next(){
  if(curPos < 6){
    prevBtn.removeAttribute("disabled")
    postion -= IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    images.style.transition = `${0.5}s ease-out`;
    curPos = curPos + 1;
  }
  if(curPos == 3){
    nextBtn.setAttribute('disabled', 'true')
  }
}
 
function init(){
  prevBtn.setAttribute('disabled', 'true')
  prevBtn.addEventListener("click", prev)
  nextBtn.addEventListener("click", next)
}
 
init();