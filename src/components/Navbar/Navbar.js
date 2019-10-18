import React from 'react'
import styled from 'styled-components'

const DivWrapper = styled.div`


    zoom: 1; /* For IE 6/7 (trigger hasLayout) */
    &:after {
    
    content:"";
    display:table;
    clear:both;
  }

&:before{
    content:"";
    display:table;

}
`;

const Unorderedlist = styled.ul`

    float: right;
    list-style: none;
    margin-top: 41px;

`;
const ListItem = styled.li`
    display: inline-block;
    margin-left: 16px;
    margin-right:30px;
`;
const AnchorTag = styled.a`

&:before{
    content:"";
    display:table;

}
&:active{
    border-bottom: 2px solid #2D6554;


}
&:hover{
    border-bottom: 2px solid #2D6554;


}
&:link{
    padding: 8px 0;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 90%;
    border-bottom: 2px solid transparent;
    -webkit-transition: border-bottom 0.2s;
    transition: border-bottom 0.2s;

}
&:visited{
    padding: 8px 0;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 90%;
    border-bottom: 2px solid transparent;
    -webkit-transition: border-bottom 0.2s;
    transition: border-bottom 0.2s;
}

`;
const Navbar = () => {
    return (
        <DivWrapper>
                    <Unorderedlist >
                        <ListItem><AnchorTag href="#cities">Home</AnchorTag></ListItem>
                        <ListItem><AnchorTag href="#form-contact"> Blog</AnchorTag></ListItem>
                    </Unorderedlist>
        </DivWrapper>
    )
}

export default Navbar
