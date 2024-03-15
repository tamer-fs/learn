import React from "react";
import "./seperator.css";

function Seperator(props) {
  // v
  // -margin
  // h-margin
  // width
  // height
  return (
    <div
      className="seperator"
      style={{
        marginTop: props.vmargin,
        marginBottom: props.vmargin,
        marginLeft: props.hmargin,
        marginRight: props.hmargin,
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
      }}
    ></div>
  );
}

export default Seperator;
