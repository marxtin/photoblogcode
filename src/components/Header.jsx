import React from 'react';
import Headline from './Headline';
import InfoText from './InfoText';
import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 12vh;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: "Staatliches";
`;

const Header = ({infoText, display}) => {
  return (
    <StyledHeader>
      <Headline />
      <InfoText display={display} infoText={infoText}/>
    </StyledHeader>
  )
}

export default Header