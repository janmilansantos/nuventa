import { Link } from 'react-router-dom';
import { heroContent } from '@/data/mockData';

export default function Hero() {
  return (
    <section className="relative min-h-[751px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Freshly baked artisan cookies"
          className="w-full h-full object-cover"
          src={heroContent.image}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      </div>
      <div className="max-w-site mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-headline font-bold text-sm tracking-wide mb-6 uppercase">
            {heroContent.badge}
          </span>
          <h1 className="mb-6">
            {heroContent.headline}
            <br />
            <span className="text-on-primary-container">{heroContent.headlineAccent}</span>
          </h1>
          <p className="text-xl text-secondary mb-10 leading-relaxed font-light max-w-lg">
            {heroContent.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/gallery" className="btn btn-primary text-lg">
              {heroContent.ctaPrimary}
            </Link>
            <Link to="/about" className="btn btn-ghost text-lg">
              {heroContent.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
