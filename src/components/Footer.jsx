import React from "react";


import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 50vw;
  height: 80px;
 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`;



const PageCredits = styled.div`
margin-left: 25px;
font-family: "Staatliches";
color: yellow;
font-size: clamp(0.5rem, 0.4074rem + 0.4938vw, 1rem);
`


const Footer = () => {
  return (
    <StyledFooter>
      <PageCredits>
      © marxtin 2022
      </PageCredits>
      <div></div>
    </StyledFooter>
  );
};

export default Footer;
