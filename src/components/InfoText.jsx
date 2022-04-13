import React from 'react';
import styled from "styled-components";


const StyledInfoText = styled.p`
  margin-right: 15px;
  font-size: clamp(1.5rem, 1.2222rem + 1.4815vw, 3rem);
  font-weight: 300;
  color: yellow;
  filter: drop-shadow(2px 2px 0px black) drop-shadow(1px 1px 0px black);
  text-align: right;
  
`;


const InfoText = ({infoText, display}) => {
  return (
    <StyledInfoText style={{display:display}}>{infoText}</StyledInfoText>
  )
}

export default InfoText