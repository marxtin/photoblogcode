import React from "react";
import styled from "styled-components";

const StyledLargeImg = styled.img`
  max-height: 80vh;
  max-width: 80vw;
  border-radius: 5px;
  box-shadow: 
  -1px -1px 4px yellow, 
  1px 1px 4px yellow, 
  1px -1px 4px yellow,
  -1px 1px 4px yellow;
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LargeImg = ({ source, alt, handleMouseOver}) => {
  return (
    <StyledLargeImg
      data-text={alt}
      src={source}
      alt={alt}
      onMouseOver={(e) => {
        handleMouseOver(e);
      }}
    />
  );
};

export default LargeImg;
