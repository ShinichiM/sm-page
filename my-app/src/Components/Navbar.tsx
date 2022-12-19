import "../App.css";
import { Hamburger } from "./Hamburger";
import React, { useState } from "react";

export const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <h2>SM</h2>
      <ul>
        <div className="hamburger">
          <Hamburger menu={menu} setMenu={setMenu} />
        </div>
      </ul>
    </nav>
  );
};
