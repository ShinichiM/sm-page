import React, { useState } from "react";
import { rootCertificates } from "tls";

export const Hamburger = () => {
  const [menu, setMenu] = useState(false);

  const menuChangeHandler = () => {
    setMenu(!menu);
    // if (menu) {
    // }
  };

  return (
    <>
      <div className="hamburger" onClick={menuChangeHandler}>
        <div
          id="burger1"
          className={`burger ${menu ? "burger1On" : "burgerOff"}`}
        />
        <div
          id="burger2"
          className={`burger ${menu ? "burger2On" : "burgerOff"}`}
        />
        <div
          id="burger3"
          className={`burger ${menu ? "burger3On" : "burgerOff"}`}
        />
      </div>
    </>
  );
};
