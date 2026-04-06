import { Link } from 'react-router-dom';
import { navLinks, contactInfo, footerFlavors } from '@/data/mockData';

export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 text-background">
      <div className="max-w-site mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        {/* Brand */}
        <div className="space-y-6">
          <div className="text-2xl font-black italic tracking-tight font-headline">
            NUVENTA COOKIES
          </div>
          <p className="text-surface-container-high/70 text-sm leading-relaxed">
            Handcrafting the world's most luxurious cookies from our bakery to
            your doorstep. Every bite is a story of quality.
          </p>
          <div className="flex gap-4">
            {['share', 'photo_camera'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-on-primary-container transition-colors"
              >
                <span className="material-symbols-outlined text-sm">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="font-headline font-bold uppercase tracking-widest text-xs text-on-primary-container">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-4 text-sm text-surface-container-high/70">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Popular Flavors */}
        <div className="space-y-6">
          <h4 className="font-headline font-bold uppercase tracking-widest text-xs text-on-primary-container">
            Popular Flavors
          </h4>
          <nav className="flex flex-col gap-4 text-sm text-surface-container-high/70">
            {footerFlavors.map((f) => (
              <a key={f} href="#" className="hover:text-white transition-colors">
                {f}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="font-headline font-bold uppercase tracking-widest text-xs text-on-primary-container">
            Get in Touch
          </h4>
          <div className="space-y-4 text-sm text-surface-container-high/70">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-on-primary-container">location_on</span>
              <p className="whitespace-pre-line">{contactInfo.address}</p>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-on-primary-container">mail</span>
              <a href={contactInfo.emailHref} className="hover:text-white transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-on-primary-container">call</span>
              <a href={contactInfo.phoneHref} className="hover:text-white transition-colors">
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-surface-container-high/40">
          &copy; 2026 Nuventa Cookies. Handcrafted with love.
        </p>
        <div className="flex gap-8 text-xs text-surface-container-high/40 uppercase tracking-widest">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Shipping Info</a>
        </div>
      </div>
    </footer>
  );
}
