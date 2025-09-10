import { Header } from "./Header";
import { HeaderMobile } from "./HeaderMobile";
import { SideMenu } from "./SideMenu";
import { useState, useEffect } from "react";

export function ResponsiveHeader({ transparent = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setIsAnimating(false);
    setTimeout(() => setMenuOpen(false), 300);
  };

  useEffect(() => {
    if (menuOpen) {
      setIsAnimating(false);
      requestAnimationFrame(() => {
        setTimeout(() => setIsAnimating(true), 10);
      });
    }
  }, [menuOpen]);

  return (
    <>
      <div className="hidden lg:block">
        <Header transparent={transparent} />
      </div>
      
      <div className="block lg:hidden">
        <HeaderMobile 
          transparent={transparent} 
          onMenuToggle={() => menuOpen ? closeMenu() : openMenu()} 
        />
      </div>

      {menuOpen && (
        <>
          <div 
            className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ease-in-out ${
              isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
            onClick={closeMenu}
          ></div>
          
          <div 
            className={`fixed top-0 left-0 h-screen z-50 lg:hidden transition-transform duration-300 ease-out ${
              isAnimating ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <SideMenu onClose={closeMenu} />
          </div>
        </>
      )}
    </>
  );
}
