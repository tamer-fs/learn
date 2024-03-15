import React from "react";
import "./mainPage.css";
import Seperator from "../../components/seperator/seperator";
import ImageScroll from "../../components/imageScroll/imageScroll";

function MainPage() {
  return (
    <div className="mp-container">
      <div className="text-section">
        <h1 className="span stylish caps italic light hidden">
          Ontdek de heerlijke smaaken uit de surinaamse keuken
        </h1>
        <Seperator
          vmargin={"10px"}
          hmargin={"0px"}
          width={"25%"}
          height={"4px"}
          backgroundColor={"var(--golden)"}
        />
        <button className="style-btn">Bekijk menu</button>
      </div>
      <div className="line"></div>
      <div className="images-section">
        <ImageScroll />
      </div>
    </div>
  );
}

export default MainPage;
