const user = document.querySelector("#user");

const com  = document.querySelector("#com");

// 가위바위 보 버튼
const userBtn = document.querySelector(".user-btn > btn");

const startBtn = document.querySelector("#startBtn");

const score = document.querySelector("#score > th");

const choice = ["가위", "바위", "보"];

let MaxCount;

let gameCount =1;

startBtn.addEventListener("click", function(){

  MaxCount = prompt("진행할 판 수 를 정해주세요.");

  if(MaxCount === null || isNaN(Number(MaxCount)) ){
    alert("다시 입력해 주세요.");
    return;
  }
  gameCount = 0;

  // 각 각 이미지 초기화
  user.src = "";
  com.src = "";

});

for(let i = 0; i < userBtn.length; i++){

  userBtn[i].addEventListener("click", function(){

    gameCount++;
    // 가위(0) , 바위(1), 보(2)
    const userChoice = choice[i];

    const comNum = Math.floor(Math.random() * 3 );
    const comChoice = choice[comNum];

    user.src = `src="(../images/${userChoice}L.png")`;
    user.src = `src="(../images/${comChoice}R.png")`;

    const str = `<span>${userChoice}</span> VS <span>${comChoice}</span>`

    if(userChoice === comChoice){

    }

    

  });

}




