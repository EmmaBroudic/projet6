//import React, { useState } from 'react';
//import Text from '../Text-collapse/text-collapse.jsx';
import React from 'react';
import flechhaut from '../../images/fleche-haut.png';
import flechbas from '../../images/fleche-bas.png';
import './button-collapse.css';

function Button(props) {

  const addHide = (e) => {
    console.log(e.target);
    const buttonHide = document.querySelector(".buttonup");
    const buttonShow = document.querySelector(".buttondown");

    buttonHide.style.display = "none"
    buttonShow.style.display = "block"
  };

  const addShow = (e) => {
    console.log(e.target);
    const buttonHide = document.querySelector(".buttonup");
    const buttonShow = document.querySelector(".buttondown");

    buttonHide.style.display = "block"
    buttonShow.style.display = "none"
  }

  return (
    <div className="button-container">
      <h2 className="titre-collapse">{props.children}</h2>
      <button className="buttonup" onClick={addHide}><img src={flechhaut} alt="flèche vers le haut" /></button>
      <button className="buttondown" onClick={addShow}><img src={flechbas} alt="flèche vers le bas" /></button>
    </div>
  );
}

export default Button;

          /*<button className="test" onClick={this.addStyle}>^</button>*/