
/* 굵기, 글자색 , 배경색 , 가로 정렬, 출력 문자열 , 적용  ( 현재 가능) */

const bg = document.querySelector('#backgrounColor');
const chattingbg = document.querySelector('#chattingBackground');

const log = document.querySelector('.log');
const changeBtn = document.querySelector("#changeButton");

const input = document.querySelector('#userInput');

const ch = document.querySelector('.chatting');

const w = document.querySelector('#width');
const h = document.querySelector('#height');
const size = document.querySelector('#fontSize');
const fo = document.querySelector('#bold');
const f = document.querySelector('#normal');
const c = document.querySelector('#color');


changeBtn.addEventListener("click", function(){

  const checkBtn1 = document.querySelector("[name = btn1]:checked");
  const checkBtn2 = document.querySelector("[name = btn2]:checked");
  const checkBtn3 = document.querySelector("[name = btn3]:checked");


  chattingbg.style.backgroundColor = bg.value;

  w.style.width = w.value;
  h.style.height = h.value;
  log.style.fontSize = size.value;
  log.style.color = c.value;

  log.innerText = input.value;

  log.style.display = "flex";
  log.style.fontWeight = checkBtn1.value;
  log.style.justifyContent = checkBtn2.value;

  log.style.alignItems = checkBtn3.value;

});

/* 굵기, 글자색 , 배경색 , 가로 정렬, 출력 문자열 , 적용  ( 현재 가능) */
