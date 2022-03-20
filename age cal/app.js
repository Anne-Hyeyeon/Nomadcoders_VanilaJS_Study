// const age = prompt("How old are you?"); 
// // 이 창이 뜬 순간, js가 잠깐 중단된다.
// // prompt : 창을 띄울 수 있게 해준다. prompt의 argument는 두 가지이다. '메시지', '디폴트값'



// console.log(age, parseInt (age));

// // but prompt는 잘 사용하지 않는다. 브라우저에서 막거나, css 적용시킬수 없다는 이유로. 옛날 기술이다 이거여~
// // 자바스크립트 typeof : 데이터 종류 볼 수 있음. typeof 쓰고 띄어쓰기 후 바로 뒤에 변수면 입력



// // parseInt : 숫자 데이터 타입으로 변경해줌. 그리고 사용자가 숫자가 아닌 다른 데이터를 입력했을 떄 알 수 있음.
// // 이 경우, 데이터타입 스트링을 ㅣㅂ력하면 NaN이 뜬다 (Not a Number)

const age = parseInt(prompt("How old are you?"))