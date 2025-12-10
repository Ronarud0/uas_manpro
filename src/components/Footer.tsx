import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Youtube, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-navy text-white/90 pt-20 pb-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-soft-blue rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-glow-blue rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-3xl font-bold mb-4 text-white">SIEGA</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Explore Future Technology & Digital Innovation. Program pendidikan teknologi modern untuk masa depan.
            </p>
            <div className="flex gap-3">
              {[Instagram, Youtube, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-soft-blue/30 hover:glow transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-white mb-6">Programs</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/programs/sistem-informasi" className="hover:text-soft-blue transition-colors">Sistem Informasi</Link></li>
              <li><Link to="/programs/e-commerce" className="hover:text-soft-blue transition-colors">E-Commerce</Link></li>
              <li><Link to="/programs/game-technology" className="hover:text-soft-blue transition-colors">Game Technology</Link></li>
              <li><Link to="/programs/akuntansi-si" className="hover:text-soft-blue transition-colors">Akuntansi SI</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-soft-blue transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-soft-blue transition-colors">Portfolio</Link></li>
              <li><Link to="/career" className="hover:text-soft-blue transition-colors">Career</Link></li>
              <li><Link to="/faq" className="hover:text-soft-blue transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-soft-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-soft-blue mt-0.5 flex-shrink-0" />
                <span>Jl. Teknologi Digital No. 123, Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-soft-blue flex-shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-soft-blue flex-shrink-0" />
                <span>hello@siega.ac.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>© 2024 SIEGA. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
