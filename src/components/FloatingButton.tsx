import { Link } from "react-router-dom";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const FloatingButton = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={cn(
          "w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center",
          "shadow-button transition-all duration-500",
          "hover:scale-110 hover:shadow-glow",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <ArrowUp size={20} />
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "w-14 h-14 rounded-2xl bg-gradient-to-br from-soft-blue to-glow-blue",
          "flex items-center justify-center text-navy",
          "shadow-button hover:scale-110 hover:shadow-glow",
          "transition-all duration-300 animate-float"
        )}
      >
        <MessageCircle size={24} />
      </a>

      {/* Register CTA */}
      <Link
        to="/contact"
        className={cn(
          "px-4 py-3 rounded-2xl bg-navy text-white text-sm font-medium",
          "shadow-button hover:scale-105 hover:shadow-glow",
          "transition-all duration-300 text-center"
        )}
      >
        Daftar
      </Link>
    </div>
  );
};

export default FloatingButton;
