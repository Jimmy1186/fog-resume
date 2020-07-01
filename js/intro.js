var fog_bg = document.getElementsByClassName("absolute-bg")[0];
var symbol= document.getElementsByClassName('symbol')[0];
var intro_btn =document.getElementsByClassName('btn')[0];
var tl = gsap.timeline();


function go(){
 gsap.to(".btn",{duration:1,opacity:0,y:100})
 gsap.from(".symbol", {duration:6,display:"block",rotation:360,opacity:1})
 
}

