import "../App.css";
import { Hamburger } from "./Hamburger";
import { MobileMenu } from "./MobileMenu";
import React, { useState } from "react";

export const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <nav className="navbar px-4 py-4">
        <h2 style={{fontSize: "8vw"}}>SM</h2>
        <ul>
          <div className="hamburger">
            <Hamburger menu={menu} setMenu={setMenu} />
          </div>
        </ul>
      </nav>
      <MobileMenu menu={menu} />
    </>
  );
};
