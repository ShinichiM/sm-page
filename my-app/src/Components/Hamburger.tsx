import React from "react";

type Props = {
  menu: boolean;
  setMenu: (menu: boolean) => void;
};

export const Hamburger: React.FC<Props> = ({ menu, setMenu }) => {
  const menuChangeHandler = () => {
    setMenu(!menu);
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
