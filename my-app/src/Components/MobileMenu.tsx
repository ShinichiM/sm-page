interface MobileMenuProps {
  menu: boolean;
}

export const MobileMenu = ({ menu }: MobileMenuProps) => {
  return (
    <div className={`mobile-menu-container ${menu ? "mobile-menu-slide-in" : "mobile-menu-slide-out"}`}>
      <ul>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
