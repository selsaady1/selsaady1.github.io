import { useState } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    closeMobileMenu();
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              data-testid="link-logo"
              className="text-xl font-bold text-primary hover:text-accent transition-colors"
            >
              Saif Elsaady
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                data-testid={`nav-link-${item.id}`}
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              data-testid="button-mobile-menu"
              className={`hamburger p-2 ${isMobileMenuOpen ? 'open' : ''}`}
            >
              <span className="bar block w-6 h-0.5 bg-foreground mb-1 transition-all"></span>
              <span className="bar block w-6 h-0.5 bg-foreground mb-1 transition-all"></span>
              <span className="bar block w-6 h-0.5 bg-foreground transition-all"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden fixed top-16 bottom-0 left-0 w-64 bg-card border-r border-border z-40 transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="pt-6 pb-6 px-6">
          <div className="space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                data-testid={`mobile-nav-link-${item.id}`}
                className="block w-full text-left text-foreground hover:text-accent transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-16 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeMobileMenu}
          data-testid="mobile-menu-overlay"
        />
      )}
    </nav>
  );
}
