$(document).ready(function(){

  $("img").click(function(){
    console.log("click");
    
    anime({
      targets: 'img',
      rotate: '+=360',
    });
  });
});

let img = ['img/1.png', 'img/2.png', 'img/3.png'];
let counter = 0;

function newIMG(){
    counter++;
    if(counter > 2){
        counter = 0;
    }
    document.getElementById('one').src = img[counter];
    return counter;
}