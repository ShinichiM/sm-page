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
      <h2>SM</h2>
      <ul className="mobile-menu-links">
        <li className="mobile-menu-link">About</li>
        <li className="mobile-menu-link">Work</li>
        <li className="mobile-menu-link">Contact</li>
      </ul>
    </div>
  );
};
