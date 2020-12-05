var items = document.getElementsByClassName("flex-item");
function changeWhite1(){
    let s = document.getElementById("content1");
    s.style.visibility = "visible";
}
function changeBack1(){
    let s = document.getElementById("content1");
    s.style.visibility = "hidden";
}
items[0].addEventListener('mouseover',changeWhite1,false);
items[0].addEventListener('mouseout',changeBack1,false);
function changeWhite2(){
    let s = document.getElementById("content2");
    s.style.visibility = "visible";
}
function changeBack2(){
    let s = document.getElementById("content2");
    s.style.visibility = "hidden";
}
items[1].addEventListener('mouseover',changeWhite2,false);
items[1].addEventListener('mouseout',changeBack2,false);
var t = document.getElementById("container");
var counter = document.getElementById("counter");
var i=0;
var timer = setInterval(function(){
    ++i;
    let j = i%2;
    if(j===0){
        t.style.backgroundImage = "url('C:/Users/ww/Desktop/one.jpg')";
        counter.innerHTML =  1;
        counter.style.backgroundColor = "red";
    }
    else{
        t.style.backgroundImage = "url('C:/Users/ww/Desktop/two.jpg')";
        counter.innerHTML =  2;
        counter.style.backgroundColor = "green";
    }
},3000);