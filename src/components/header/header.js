import React, { useEffect, useState } from "react";
import "./header.css";
import Seperator from "../seperator/seperator";

function Header() {
  useEffect(() => {
    // set header on scroll
    const header = document.getElementById("header");
    let oldScroll = 0;
    window.onscroll = () => {
      if (window.scrollY > 240) {
        header.style.top = "-240px";
        header.style.position = "fixed";
      } else {
        header.style.position = "relative";
      }

      if (oldScroll > window.scrollY) {
        header.style.top = "0px";
      }

      oldScroll = window.scrollY;
    };
  }, []);

  return (
    <header id="header" className="header slide-in-fwd-center">
      <div className="left-container">
        <div className="l-screen-menu">
          <a className="text-btn color-white">Home</a>
          <a className="text-btn color-white">Over Ons</a>
          <a className="text-btn color-white">Menu</a>
        </div>
      </div>
      <div className="title-container">
        <h1 id="title" className="title">
          Tesi Boen
        </h1>
        <Seperator
          vmargin={"10px"}
          hmargin={"0px"}
          width={"25%"}
          height={"2px"}
          backgroundColor={"var(--white)"}
        />
        <p className="p modern letter-space">Afhaalrestaurant</p>
      </div>
      <div className="right-container"></div>
    </header>
  );
}

export default Header;
