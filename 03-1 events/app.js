
const h1 = document. querySelector(".hello h1");

function handleh1Click(){
    // console.log("h1 was clicked!")
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
//여기서 body는, window내에서만 인식 가능.

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOnline(){
    alert("ALL GOOOD!");
}

function handleWindowOffline(){
    alert("SOS, no WIFI");
}


// h1.addEventListener("click", handleh1Click);

// //js에 이 function 버튼을 넘겨줘서, js가 대신 클릭 버튼을 누를 수 있게 한다.

// // function의 실행 버튼은 이름 뒤()이다.

// h1.addEventListener("mouseenter", handleMouseEnter);

// h1.addEventListener("mouseleave", handleMouseLeave);

h1.onclick = handleh1Click;
h1.onmouseenter = handleMouseEnter;
h1.onmouseleave = handleMouseLeave

window.addEventListener("resize", handleWindowResize)

window.addEventListener("copy", handleWindowCopy)

window.addEventListener("online", handleWindowOnline)

window.addEventListener("offline", handleWindowOffline)