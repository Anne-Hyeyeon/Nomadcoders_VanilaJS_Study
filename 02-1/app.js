// const age = prompt("How old are you?"); 
// 이 창이 뜬 순간, js가 잠깐 중단된다.
// prompt : 창을 띄울 수 있게 해준다. prompt의 argument는 두 가지이다. '메시지', '디폴트값'


//console.log(typeof age);
// 답변의 타입 보기. variable의 typoe 보는 방법

// console.log(age, parseInt (age));


// but prompt는 잘 사용하지 않는다. 브라우저에서 막거나, css 적용시킬수 없다는 이유로. 옛날 기술이다 이거여~
// 자바스크립트 typeof : 데이터 종류 볼 수 있음. typeof 쓰고 띄어쓰기 후 바로 뒤에 변수명 입력




// parseInt : 숫자 데이터 타입으로 변경해줌. 그리고 사용자가 숫자가 아닌 다른 데이터를 입력했을 떄 알 수 있음.
// 이 경우, 데이터타입 스트링을 입력하면 NaN이 뜬다 (Not a Number)

const age = parseInt(prompt("How old are you?"));
//두 가지 함수가 사용됨

//심플 조건문
if(isNaN(age)){
    alert("Please write a number.");
} else {
    alert("Thank you for writing your age.");
}

//조건 하나 더 추가
if(isNaN(age)){
    console.log("Please write a number.");
} else if (age<18) {
    console.log("You are yoo young.");
} else {
    console.log("You can drink");
}

// 연산자를 이용해 체크
if(isNaN(age)){
    console.log("Please write a number.");
} else if (age<18) {
    console.log("You are yoo young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else {
        console.log("You can't drink");
}

//조건문 하나 더 추가!
if(isNaN(age)){
    console.log("Please write a number.");
} else if (age<18) {
    console.log("You are yoo young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink.");
} else if (age > 50 && age <80) {
    console.log("You should exercise.");
} else if (age > 80) {
    console.log("You can do whatever you want.");
}

    
//음수까지 판별하기
if(isNaN(age) || age < 0){
    console.log("Please write a real positive number.");
} else if (age<18) {
    console.log("You are yoo young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink.");
} else if (age > 50 && age <80) {
    console.log("You should exercise.");
} else if (age > 80) {
    console.log("You can do whatever you want.");
}