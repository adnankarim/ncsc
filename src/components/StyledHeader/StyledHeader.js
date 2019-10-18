import React from 'react';
import styled from 'styled-components'
import $ from 'jquery'
import Navbar from '../Navbar/Navbar'
const HeaderDiv = styled.header`
   background-size: cover;
    background-position: center;
    height: 100vh;
    background-attachment: fixed;

`;
class StyledHeader extends React.Component {


  componentDidMount() {
    var body = document.querySelector('header');
body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),   url(/3.jpg)";
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
 $('header').animate({opacity: 0.9}, 'slow', function() {
  $(this).css({'background-image': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),'+ '   url(/'+random+'.jpg)'}).animate({opacity: 1});
});

//body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),'+ '   url(images/'+random+'.jpg)';

}

function randomGen(){

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  }

 

  render() {
    return (
      <HeaderDiv>
        <Navbar/>
      </HeaderDiv>
       
    )
  }
}


export default StyledHeader;