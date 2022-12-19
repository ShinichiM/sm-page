import "../App.css";
import { Hamburger } from "./Hamburger";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>SM</h2>
      <ul>
        <div className="hamburger">
          <Hamburger />
        </div>
      </ul>
    </nav>
  );
};
