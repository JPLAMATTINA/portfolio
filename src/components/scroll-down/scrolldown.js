import React from "react";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

const MyScroll = styled.div`
  position: relative;
  z-index: 1000000;
  margin: 650px 450px;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-size: 3em;
  color: #000000;
 
  .turn {
    cursor: pointer;
    color:#000000
    
  }
  .hover{
    color: #fff379
  }
`;

const handleScrollDown = () =>{

}

const ScrollDown = () => {
  return (
    <MyScroll>
      <div  onClick={handleScrollDown}>
      <Nav.Link href="#about" className="turn" > + </Nav.Link>
      </div>
    </MyScroll>
  );
};

export default ScrollDown;