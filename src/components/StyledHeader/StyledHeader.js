import React from 'react';
import styled from 'styled-components'
import $ from 'jquery'


class StyledHeader extends React.Component {


  componentDidMount() {
    var body = document.querySelector('#home');
body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),   url(/3.jpg)";
body.style.backgroundPosition  = "center";
body.style.backgroundAttachment = "fixed";
body.style.backgroundSize  = "cover";
body.style.height = "100vh";

var min = 1;
var max = 2;
var random;
var lastRandom;



 setInterval(backChanger, 7000);


                      function backChanger(){
    if (lastRandom === undefined) {
    random = randomGen();
}
else {
    random = randomGen();
    if (random >= lastRandom) random += 1;
}
lastRandom = random;
console.log(random);
body.style.backgroundPosition  = "center";
body.style.backgroundAttachment = "fixed";
body.style.backgroundSize  = "cover";
body.style.height = "100vh";
 $('#home').animate({opacity: 0.9}, 'slow', function() {
  $(this).css({'background-image': 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),'+ '   url(/'+random+'.jpg)'}).animate({opacity: 1});
});

//body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),'+ '   url(images/'+random+'.jpg)';

}

function randomGen(){

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  }

 

  render() {
    return (
      <div/>
       
    )
  }
}


export default StyledHeader;