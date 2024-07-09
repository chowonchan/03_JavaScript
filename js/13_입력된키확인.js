const images = ["Q쵸.webp","W마.webp","E히.webp","R시.webp"];
const keys = document.querySelectorAll(".key");

/* 문서 전체에 이벤트 리스너 추가 */

document.addEventListener("keydown", function(e){
  // e :  이벤트 객체
  // e.key : 입력한 key
  // console.log(e.key);

  let index; // 인덱스를 저장할 변수

  // 문자열.toUpperCase() : 문자열을 대문자로 변환
  // 문자열.toLowerCase() : 문자열을 소문자로 변환

  switch(e.key.toLowerCase()){ // 입력 키를 소문자로 변환
    case 'q': index = 0; break;
    case 'w': index = 1; break;
    case 'e': index = 2; break;
    case 'r': index = 3; break;
    default : return;
  }
  // keys[index].style.backgroundColor = "blue";
  // 배경을 이미지로 지정
  keys[index].style.backgroundImage = `url("../images/13_입력된키확인/${images[index]}")`;

  // 글자색 토명으로 변경
  // - rgba(red, green, blue, alpha)
  // - rgb 값은 0 ~ 255 / alpha(투명도) 0(투명) ~1(불투명)
  keys[index].style.color ="rgba(0,0,0,0)"; 
});



document.addEventListener("keyup", function(e){
  
  // console.log(e.key);

  let index;

  switch(e.key.toLowerCase()){
    case 'q': index = 0; break;
    case 'w': index = 1; break;
    case 'e': index = 2; break;
    case 'r': index = 3; break;
    default : return;
  }
  keys[index].style.backgroundColor = "white";

  // 배경 이미지 제거
  keys[index].style.backgroundImage = "none";

  // 글자색 검정
  keys[index].style.color = "rgba(0, 0, 0, 1)";
});


/* 이미지가 마우스 따라 다니게 하기 */

const cursorImage = document.querySelector("#cursorImage");

// 문서 전체에 "mousemove"(마우스가 움직였을 때) 감지 추가
document.addEventListener("mousemove",function(e){

  // console.log(e);
  // e.pageX : 가로 방향 마우스 위치(왼쪽에서 떨어진 px)
  // e.pageY : 세로 방향 마우스 위치(위쪽에서 떨어진 px)

  cursorImage.style.left = `${e.pageX +10}px`;
  cursorImage.style.top  = `${e.pageY -30}px`;
});


