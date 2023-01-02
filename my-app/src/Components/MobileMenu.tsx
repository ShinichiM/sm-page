interface MobileMenuProps {
  menu: boolean;
}

export const MobileMenu = ({ menu }: MobileMenuProps) => {
  return (
    <div
      className={`mobile-menu-container ${
        menu ? "mobile-menu-slide-in" : "mobile-menu-slide-out"
      }`}
    >
      <h2 style={{ fontSize: "8vw" }} className="py-3">
        SM
      </h2>
      <ul className="mobile-menu-links">
        <li className="mobile-menu-link" style={{ fontSize: "7vw" }}>
          About
        </li>
        <li className="mobile-menu-link" style={{ fontSize: "7vw" }}>
          Work
        </li>
        <li className="mobile-menu-link" style={{ fontSize: "7vw" }}>
          Contact
        </li>
      </ul>
    </div>
  );
};
