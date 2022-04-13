import React, { useState} from "react";
import Header from "./components/Header";
import Enlarged from "./components/Enlarged";
import Grid from "./components/Grid";
import Footer from "./components/Footer";
import GlobalFonts from "./fonts/fonts.js";
import "./App.css";




const App = () => {
  const [infoText, setInfoText] = useState("");
  const [display, setDisplay] = useState("none");
  const [show, setShow] = useState("none");
  const [source, setSource] = useState("");
  const [alt, setAlt] = useState("");
  const [credit, setCredit] = useState("");
 
 
  

  const handleMouseOver = (e) => {
    setDisplay("block");
    setInfoText(e.target.dataset.text)
    
  };

  const handleMouseOut = (e) => {
    setDisplay("none");
    
  };

  const handleClick = (e) => {
    setShow("block");
    setSource(e.target.src);
    setAlt(e.target.alt);
    setCredit(e.target.dataset.credits);
    
    
  };

  
  const handleClose = (e) => {
    setShow("none");
    setDisplay("none")
    
  };

  return (
    <>
      <GlobalFonts />
      <Header infoText={infoText} display={display} />
      <Enlarged
        source={source}
        show={show}
        alt={alt}
        display={display}
        handleClose={handleClose}
        handleMouseOver={handleMouseOver}
        credit={credit}
        
        
       
      />
      <Grid
        
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
        handleClick={handleClick}
      />
      <Footer/>
    </>
  );
};

export default App;
