import React, { CSSProperties } from "react";
// import "./StyleModule.css";
import "./styleModule.css";

// const Styles = () => {
//   return (
//     <div style={{ backgroundColor: "red" }}>
//       styles <hr />
//     </div>
//   );
// };
const Styles = () => {
  const text: CSSProperties = {
    // backgroundColor: "red",
    fontSize: "3rem",
    fontWeight: "bold",
    color: "GrayText",
  };
  return (
    <div style={text} className="blue">
      styles <hr />
    </div>
  );
};

export default Styles;
