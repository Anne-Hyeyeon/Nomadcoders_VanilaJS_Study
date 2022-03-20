// const daysofWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// // Get Item from Array
// console.log(daysofWeek[4]);

// // Add one more day to the array
// daysofWeek.push("sun");

// console.log(daysofWeek);


// 예제
// const player = {
//     name:"nico",
//     points: 10,
//     fat: true,
// };

// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// player.fat = false;
// console.log(player);



// 예제
// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age)
// }

// sayHello("nico", 10)
// sayHello("dal", 23)
// sayHello("lynn", 21)


// function plus(a,b){
//     console.log(a + b);
// }

// plus(8, 60);

// player object


// 예제
// const player = {
//     name : "hy",
//     sayHello: function(otherPersonName) {
//         console.log("Hello! " + otherPersonName + " nice to meet you!");
//     },
// };

// console.log(player.name);
// player.sayHello("mj");


// 예제
// const bestCouple = {
//     partnerOne : function(partnerOneName, partnerOneArea, partnerOneAge) {
//         console.log(partnerOneName + " 님은 " + partnerOneArea + "지역에 살고있고, 나이는 " + partnerOneAge + "살 입니다.");
//     },
//     partnerTwo : function(partnerTwoName, partnerTwoArea, partnerTwoAge) {
//         console.log(partnerTwoName + " 님은 " + partnerTwoArea + "지역에 살고있고, 나이는 " + partnerTwoAge + "살 입니다.");
//     },
// };

// bestCouple.partnerOne("민재", "동작구", 31);
// bestCouple.partnerTwo("혜연", "동작구", 31);

// const bestCouple = {
//     bestCoupleIs : function(partnerOneName, partnerTwoName) {
//         console.log(partnerOneName + "씨는 " + partnerTwoName + "이 없이 못 산대요. ");
//     },
// };

// bestCouple.bestCoupleIs("민재", "혜연");


// const favoriteFood = {
//     firstFood : function (fisrtFoodName) {
//         console.log(fisrtFoodName + "을 좋아하신다고요..? 살 찌는 게 걱정되지도 않으세요? 아마 " + fisrtFoodName + "을 계속 먹게 된다면... 민재는 뚱뚱한 햄스터가 될 거야.");
//     },
//     secondFood : function (secondFoodName) {
//         console.log("세상에..." + secondFoodName + "...그렇게 살 찌는 음식을 좋아하다니. 실망스럽군요. " + secondFoodName + "을 끊지 못하겠다면... 운동을 하러 다니세요 김민재씨.");
//     },
//     thirdFood : function (thirdFoodName) {
//         console.log( "맙소사..." + thirdFoodName + "과 함께라면 당신은 영영 날씬해질 수 없어요. 정신차려요 김민재씨!");
//     },
// };


// 예제
// favoriteFood.firstFood("고기");
// favoriteFood.secondFood("훠궈");
// favoriteFood.thirdFood("카레");


// const whatINeedForLove = ["사랑","인내","돈","미모","열정"];

// const arraytest1 = ["1","2"]
// const arraytest2 = ["3","4"]

// arrayResult = arraytest1.concat(arraytest2)

// console.log("arrayResult : " + arrayResult)

// whatINeedForLove.push("노오오오력");

// console.log(whatINeedForLove[5]);

// const partnerOneInfo = {
//     name : "hy",
//     age : 25,
//     hobby : "dancing",
// };

// console.log(partnerOneInfo.name);
// console.log(partnerOneInfo.age);

// document.write(partnerOneInfo.name);

// // 계산기 예제
// const calculator = {
//     add: function (a,b) {
//         console.log(a + b);
//     },
//     minus: function (a,b) {
//         console.log(a - b);
//     },
//     divide: function (a,b) {
//         console.log(a / b);
//     },
//     multifly: function (a,b) {
//         console.log(a * b);
//     },
//     power: function (a,b) {
//         console.log(a**b);
//     },
// };

// calculator.minus(5,3);
// calculator.power(10,50);
// calculator.multifly(12,40);


// 한국 나이 계싼하기
const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageofForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);



