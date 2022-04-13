import React from "react";
import styled from "styled-components";
import {
  TwitterShareButton,
  TelegramShareButton,
  TelegramIcon,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from "react-share";



import LargeImg from "./LargeImg";

const StyledEnlarged = styled.div`
  position: fixed;
  top: 10vh;
  width: 100vw;
  height: 90vh;
`;

const Credit = styled.p`
position: absolute;
right: 30px;
font-family: "Staatliches";
font-size: 1rem;
color: yellow;
margin-left: 10vw;
filter: drop-shadow(2px 2px 0px black) drop-shadow(1px 1px 0px black);
`

const Share = styled.div`
max-width: 80vw;
height: 40px;
position: fixed;
right: 40px;
bottom: 30px;
z-index: 4;
`

const Enlarged = ({ source, show, handleClose, alt, handleMouseOver, credit }) => {

  return (
    <StyledEnlarged style={{ display: show }} onMouseOver={(e)=>handleMouseOver(e)} onClick={(e) => handleClose(e)} data-text={alt}>
      <Credit>{credit}</Credit>
      
      <LargeImg
        source={source}
        alt={alt}
        handleMouseOver={handleMouseOver}
        
      />
    <Share style={{zIndex:4}}>
      <TelegramShareButton
           style={{zIndex:4}}
          url={source}
          title={`from https://marxtin.github.io/myPhotoBlog, photo by ${credit}`}
         
        >
          <TelegramIcon size={35} iconFillColor={"yellow"} bgStyle={{fill:"transparent"}} round />
        </TelegramShareButton>
        <TwitterShareButton
          url={source}
          title={`from marxtin.github.io/myPhotoBlog, photo by ${credit}`}
         
        >
          <TwitterIcon size={35} iconFillColor={"yellow"} bgStyle={{fill:"transparent"}} round />
        </TwitterShareButton>
        <RedditShareButton
          url={source}
          title={`from marxtin.github.io/myPhotoBlog, photo by ${credit}`}
         
        >
          <RedditIcon size={35} iconFillColor={"yellow"} bgStyle={{fill:"transparent"}} round />
        </RedditShareButton>
        <WhatsappShareButton
          url={source}
          title={`from marxtin.github.io/myPhotoBlog, photo by ${credit}`}
         
        >
          <WhatsappIcon size={35} iconFillColor={"yellow"} bgStyle={{fill:"transparent"}} round />
        </WhatsappShareButton>
      </Share>
    </StyledEnlarged>
  );
};

export default Enlarged;
