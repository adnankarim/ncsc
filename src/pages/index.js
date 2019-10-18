import React from "react"
import styled from 'styled-components'
import '../style.css'
import '../grid.css'


const StyledHeader = styled.header`
    
    margin:0 0;
    padding:0 0;
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-attachment: fixed;
   background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),   url(/crypto.jpg);

`;

export default () => (

    <StyledHeader>
         hello
    </StyledHeader>


    
    
    
    
    );
