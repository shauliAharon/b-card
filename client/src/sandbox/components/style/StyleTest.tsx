import React, { CSSProperties } from "react";
import "./styleModule.css";

const StyleTest = () => {
  const purple: CSSProperties = {
    backgroundColor: "purple",
    color: "red",
  };
  let isGreen = true;
  //   isGreen = false;

  //   const grreen: CSSProperties = isGreen
  //     ? { backgroundColor: "yellow" }
  //     : { backgroundColor: "green" };
  return (
    <div>
      <h1 style={{ backgroundColor: "yellow" }}>TITLE</h1>
      <h2 style={purple}>SubTitle</h2>
      <hr />
      <p className="par">paragraph</p>
      <span
        style={{ backgroundColor: isGreen ? "green" : "blue" }}
        //   {grreen}
      >
        X
      </span>
    </div>
  );
};

export default StyleTest;
