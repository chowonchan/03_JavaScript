// 기준이 되는 박스
const standard = document.querySelector("#standard");

const btns = document.querySelectorAll(".btn"); // 버튼들

let count = 1;

for(let i = 0; i < btns.length; i++){
  btns[i].addEventListener("click", () => {

    const str = btns[i].innerText; // 작성된 버튼 내용
    // console.log(str);
    switch(str){
      case "prepend":
        const span1 = document.createElement("span"); // span 생성
        span1.innerText = count; // span 내용으로 count 추가
        span1.style.backgroundColor = "skyblue";
        standard.prepend(span1);// #standard 첫 번째 자식으로 span1 추가
      break;

      case "append":
        const span2 = document.createElement("span");
        span2.innerText = count;
        span2.style.backgroundColor = "purple";
        standard.append(span2); //standard 마지막 자식으로 span2 추가
      break;

      case "before":
        const div1 = document.createElement("div"); // div 요소 생성
        div1.innerText = count; // 내용으로 count 추가
        div1.style.backgroundColor = "greenyellow"; 
        div1.className = "box";// box 클래스 추가
        standard.before(div1);
        
      break;

      case "after":
        const div2 = document.createElement("div");
        div2.innerText = count;
        div2.style.backgroundColor = "gray";
        div2.className = "box";
        standard.after(div2);
      break;

      case "remove":
        // .container 요소를 제거
        document.querySelector(".container").remove();
        
      break;
    }
    count++; // count 1 증가

  });
}
