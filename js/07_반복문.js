/* [for문 작성법]
  for([1]초기식 ; [2]조건식 ; [4]증감식){
    [3]조건식이 true인 경우 반복 수행할 코드;
  }
*/

/** 12345 출력 */
function check1() {

  // num이 1부터 시작 해서
  // 1씩 증가 하다가
  // num 값이 5 이하가 아닌 순간 반복을 종료하는 반복문
  for (let num = 1; num < 6; num++) {
    console.log(num);

  }
}
/** 1부터 10까지 1씩 증가하며 출력하기 */
function check2() {
  for (let num = 1; num < 11; num++) {

    console.log(num);
  }
}

/** 5부터 13까지 1씩 증가하며 출력하기 */
function check3() {
  for (let num = 5; num < 14; num++) {

    console.log(num);
  }
}

/**1부터 5까지 1씩 증가한 숫자를 한 줄로 출력하기 */
function check4() {
  let result = '';// 결과 저장용 변수에 빈칸(string '');

  for (let num = 1; num < 6; num++) {
    result += num;
  }
  console.log(result);
}
// alt +shift + R  같은 문자 한번에 바꾸기

/** 1부터 10까지 1씩 증가한 숫자들의 합을 출력하기 */
function check5() {

  let sum = 0; // 더했을때 영향이 없는 숫자 0을 대입

  for (let num = 1; num < 11; num++) {
    sum += num;
  }
  console.log(sum);
}

/**1부터 10까지 2씩 증가하며 출력하기 */
function check6() {

  // 증감식을 2씩 증가하도록 변경(복합 대입 연산자 사용)
  for (let num = 1; num < 11; num += 2) {
    console.log(num);
  }

}

/**3부터 30까지 3의 배수만 출력하기 */
function check7() {

  // 증감식을 2씩 증가하도록 변경(복합 대입 연산자 사용)
  for (let num = 3; num < 31; num += 3) {
    console.log(num);
  }

}

/* 1부터 20 까지 4의 배수만 출력하고 합계도 구하기 */
function check8() {
  let sum = 0;
  for (let num = 1; num <= 20; num++) {
    if (num % 4 === 0) {
      console.log(num);
      sum += num;

    }
  }
  console.log("합계 : ", sum);
}

function check9() {
  // 기능 수행에 필요한 요소들 모두 얻어오기
  const start = document.getElementById("start9");
  const end = document.getElementById("end9");
  const multiple = document.getElementById("multiple9");

  // input 요소에 작성된 값을 얻어와 숫자로 변환해서 저장
  let s = Number(start.value);
  let e = Number(end.value);
  let m = Number(multiple.value);

  let sum = 0;
  // 입력된 값의 범위 만큼 반복
  for (let num = s; num <= e; num++) {
    if (num % m === 0) {
      console.log(num);
      sum += num;

    }
  }
  console.log("합계 : ", sum);
}
function check10() {
  let input = document.getElementById("dan10");

  // 단이 입력되지 않은 경우
  if (input.value.length === 0) {
    alert("단을 입력해 주세요.")
    return; // 함수를 "즉시 죵로" 하고 호출한 곳으로 돌아감
  }

  const dan = Number(input.value);

  if (dan < 2 || dan > 9) {
    alert("2 ~ 9 사이 숫자를 입력해 주세요");
    return;
  }

  for (let num = 1; num <= 9; num++) {
    console.log(`${dan} X ${num} = ${dan * num}`);
  }
}

function check11() {
  for (let num = 10; num >= 1; num--) {
    console.log(num);
  }
}

function check12() {
  let input = document.getElementById("dan12");

  if (input.value.length === 0) {
    alert("단을 입력해 주세요.")
    return;
  }
  const dan = Number(input.value);

  if (dan < 1 || dan > 9) {
    alert("1 ~ 9 사이 숫자를 입력해 주세요");
    return;
  }

  for (let num = 9; num >= 1; num--) {
    console.log(`${dan} X ${num} = ${dan * num}`);
  }

}

/* 특정 배수 마다 지정된 모양으로 출력하기 */
function check13() {

  const input = document.getElementById("input13");
  const output = document.getElementById("output13");
  const result = document.getElementById("result13");

  // 배수
  const multiple = Number(input.value);

  // 출력 모양
  const shape = output.value;

  let str = ''; // 출력될 문자열을 저장할 변수

  // 1 ~ 20 까지 1씩 증가하는 반복문
  for (let num = 1; num <= 20; num++) {
    if (num % multiple === 0) {
      // console.log(shape);
      str += `${shape} `;

    } else {
      // console.log(num);
      str += `${num} `;
    }

    // num === 10 인 경우 줄을 변경하는 <br> 추가
    if (num === 10) str += "<br>";
  }
  result.innerHTML = str;

}

function check15() {

  for (let row = 0; row < 4; row++) {
    let str = '';
    for (let col = 0; col < 5; col++) {
      str += col+1;
    }
    console.log(str);
    console.log("----");
  }
}
function check16() {

  for (let row = 0; row < 3; row++) {
    let str = '';
    for (let col = 6; col > 0; col--) {
      str += col;
    }
    console.log(str);
    console.log("----");
  }
}

function check17(){

  for (let row = 1; row <= 4; row++){
    let str = '';
    for (let col = 1; col <= row; col++){
      str += col;
      
    }
    console.log(str);
  }
}

function check18(){

  for (let row = 1; row <= 4; row++){
    let str = '';
    for (let col = 1; col <= row; col++){
      
      str += '*';
      
    }
    console.log(str);
  }
}

function check19(){

  for (let row = 5; row >=1; row--){
    let str = '';
    for (let col = 1; col <= row; col++){
      
      str += col;
      
    }
    console.log(str);
  }
}

/**1부터 30사이의 정수 중 4의 배수의 개수 구하기 */
function check20(){
  let count = 0; // 4의 배수를 세기 위한 변수

  for(let num = 1; num <= 30; num++){
    if(num % 4 === 0){
      count++; // count 1 증가
    }
  }
  alert(`count : ${count}`);
}

function check21(){
  const input = document.getElementById("input21");
  const value = Number(input.value);

  let count = 0;
  for(let num = 1; num <=100; num++){

    if(num % value === 0){
      count++;
    }
  }
  alert(`count : ${count}`);
}

function check22(){
  let count = 1;
  // 3행 4열 - 2중 for문
  for(let row = 1; row <=3 ; row++){
    let str = '';
    for(let col = 1; col <=4 ; col++){
      str += count++ + " ";

    }
    console.log(str);
  }
}

/* while */
/** 0이 입력될 때 까지 입력된 값 누적하기 */

function check23(){

  let sum = 0; // 누적용 변수
  let value=0;
  // 입력된 숫자가 0이 아니면 반복
  while( value = Number(prompt("숫자 입력")) != 0 ){
    sum += value;
  }
  alert(`합계 : ${sum}`);
}

/** 메뉴 주문하기 */
function check24(){

  // 메뉴 가격을 저장한 변수 선언
  const gimbap = 4000;
  const ramen  = 4500;
  const donkkaseu = 9000;

  // 주문 개수 카운트

  let gimbapCount    = 0; // 김밥 주문 개수 카운트하는 변수
  let ramenCount     = 0; // 라면
  let donkkaseuCount = 0; // 돈까스

  // prompt에 입력된 값을 저장할 변수
  let input; // 선언만 한 경우 undefined

  // input이 undefiend이기 때문에
  // while문 첫 반복은 무조건 수행됨!!
  while(input !== null){ // input이 null이 아니면 반복

    // prompt -> 확인 : 작성한 값 반환
    // prompt -> 취소 : null
    //      -> 취소 선택 시  while문 다음 반복 수행 X
    input = prompt("메뉴 번호 입력");

    // input 값에 따라서 알맞는 case 수행
    switch(input){
      case '1': gimbapCount++;    break; 
      case '2': ramenCount++;     break;
      case '3': donkkaseuCount++; break;
      case null : alert("주문 완료!!!!"); break;
      default: alert("메뉴에 작성된 번호만 입력해 주세요");
    }
 
  } // while end

  let html =''; // 화면에 출력될 html 코드를 저장할 변수

  if(gimbapCount > 0){
    html += `<li>김밥(${gimbapCount}개) : ${gimbapCount * gimbap}원</li>`;
  }

  if(ramenCount > 0){
    html += `<li>라면(${ramenCount}개) : ${ramenCount * ramen}원</li>`;
  }

  if(donkkaseuCount > 0){
    html += `<li>돈까스(${donkkaseuCount}개) : ${donkkaseuCount * donkkaseu}원</li>`;
  }

  // 주문한 메뉴 합계 저장
  const sum = (gimbapCount * gimbap)
              + (ramenCount * ramen) 
              + (donkkaseuCount * donkkaseu);

  html += `<li>합계 : ${sum}원</li>`;

  // id가 "result24"인 요소에 내용으로 html 변수 값 추가
  // + HTML 태그 해석
  document.getElementById("result24").innerHTML = html;
}