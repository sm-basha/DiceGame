var randomNumber1 = Math.floor(Math.random()*6)+1;          //1-6
var randomImgScr = "images/dice" + randomNumber1 + ".png";  // dice1.png - dice6.png
var image1=document.querySelectorAll("img")[0];             //images/dice1.png - dice6.png
image1.setAttribute("src", randomImgScr);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImgScr2 = "images/dice" + randomNumber2 + ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgScr2);



// var randomNumber1 = Math.random();
// randomNumber1 = Math.round(randomNumber1 * 6);
//
// if (randomNumber1 == 0) {
//   document.querySelector("img").setAttribute("src", "images/dice1.png");
// } else if (randomNumber1 == 1) {
//   document.querySelector("img").setAttribute("src", "images/dice1.png");
// } else if (randomNumber1 == 2) {
//   document.querySelector("img").setAttribute("src", "images/dice2.png");
// } else if (randomNumber1 == 3) {
//   document.querySelector("img").setAttribute("src", "images/dice3.png");
// } else if (randomNumber1 == 4) {
//   document.querySelector("img").setAttribute("src", "images/dice4.png");
// } else if (randomNumber1 == 5) {
//   document.querySelector("img").setAttribute("src", "images/dice5.png");
// } else  {
//   document.querySelector("img").setAttribute("src", "images/dice6.png");
// }
//
// var randomNumber2 = Math.random();
// randomNumber2 = Math.round(randomNumber2 * 6);
//
// if (randomNumber2 == 0) {
//   document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
// } else if (randomNumber2 == 1) {
//   document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
// } else if (randomNumber2 == 2) {
//   document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
// } else if (randomNumber2 == 3) {
//   document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");
// } else if (randomNumber2 == 4) {
//   document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");
// } else if (randomNumber2 == 5) {
//   document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");
// } else  {
//   document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
// }

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerText="😘Player1 Wins ";
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerText="Player2 Wins😎";
}else{document.querySelector("h1").innerText="😏 Draw 😕";}
