import React from "react";

const StringDemo = () => {
  let bool = true;
  //   bool = false;

  return (
    <>
      {bool ? "yes" : "no"}
      <hr />
    </>
  );
};

export default StringDemo;
