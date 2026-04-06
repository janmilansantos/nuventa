import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '@/data/mockData';
import { useMobileMenu } from '@/hooks/useMobileMenu';

export default function Header() {
  const { pathname } = useLocation();
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <header className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-md shadow-rest transition-colors duration-300">
      <div className="flex justify-between items-center px-6 py-4 max-w-site mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">cookie</span>
          <span className="text-xl font-extrabold text-primary italic font-headline tracking-tight uppercase">
            Nuventa Cookies
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-headline font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors duration-300 ${
                pathname === link.path
                  ? 'text-primary'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-primary active:opacity-70 transition-opacity">
            <span className="material-symbols-outlined">shopping_bag</span>
          </button>
          <button
            className="md:hidden p-2 text-primary"
            onClick={toggle}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-outline-variant/30 px-6 py-6 flex flex-col gap-4 font-headline font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={close}
              className={`transition-colors ${
                pathname === link.path
                  ? 'text-primary'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
