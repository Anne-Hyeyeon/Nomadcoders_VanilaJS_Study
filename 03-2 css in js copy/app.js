
const h1 = document. querySelector(".hello h1");

// function handleTitleClick(){
//     if(h1.className === "active"){
//         h1.className = "";
//     } else {
//         h1.className = "active";
//     }
// }

// 이 코드에서는 active라는 스트링을 두 번 사용하고 있는데, 스트링은 오류의 확률이 너무나도 높다!

// function handleTitleClick(){
//     const clickedClass = "active";
//     if(h1.className === clickedClass){
//         h1.className = "";
//     } else {
//         h1.className = clickedClass;
//     }
// }



// function handleTitleClick(){
//     const clickedClass = "active";
//     if(h1.classList.contains(clickedClass)){
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }



function handleTitleClick(){
    h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);
