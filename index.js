let myimgEl = document.getElementById("myimg");
let iconEl = document.getElementById("icon");
let buttonEl = document.getElementById("button");
let count = 1;
function likeimg(){
    if(count === 1){
    myimgEl.src = "https://tse1.mm.bing.net/th?id=OIP.n1d8R3WXkeDwYZjKL0qnOQHaFj&pid=Api&P=0&h=180";
    buttonEl.style.backgroundColor = "blue";
    buttonEl.style.border = "none;";
    iconEl.style.color = "blue";
    count =0;
    }
    else{
    myimgEl.src = "https://tse1.mm.bing.net/th?id=OIP.Gh8QtnFEh8LOj1a6-Q88FQHaFj&pid=Api&P=0&h=180";
    buttonEl.style.backgroundColor = "grey";
    buttonEl.style.border = "none;";
    iconEl.style.color = "grey";
    count =1;
    }
}