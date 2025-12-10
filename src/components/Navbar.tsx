import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Career", path: "/career" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-fade-down",
        "transition-all duration-500 ease-out"
      )}
    >
      {/* Desktop Navbar */}
      <div
        className={cn(
          "hidden md:flex items-center gap-1 px-2 py-2 rounded-2xl",
          "glass border border-white/30",
          "transition-all duration-300",
          isScrolled && "shadow-glow"
        )}
      >
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative px-4 py-2 text-sm font-medium text-navy rounded-xl",
                "transition-all duration-300",
                "hover:bg-white/30 hover:shadow-sm",
                "nav-link",
                isActive && "active-dot bg-white/20"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={cn(
          "md:hidden p-3 rounded-xl glass border border-white/30",
          "text-navy transition-all duration-300",
          "hover:bg-white/30"
        )}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={cn(
            "md:hidden absolute top-full mt-2 left-1/2 -translate-x-1/2",
            "w-[280px] p-4 rounded-2xl glass border border-white/30",
            "animate-scale-in"
          )}
        >
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-sm font-medium text-navy rounded-xl",
                  "transition-all duration-300",
                  "hover:bg-white/30",
                  isActive && "bg-white/20 glow"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
