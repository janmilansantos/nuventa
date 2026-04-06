import { Link } from 'react-router-dom';
import { aboutTeaser } from '@/data/mockData';

export default function AboutTeaser() {
  return (
    <section className="py-24 max-w-site mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-outline-variant/30 rounded-card-lg z-0" />
          <img
            className="w-full h-[600px] object-cover rounded-card-lg relative z-10 shadow-hover"
            src={aboutTeaser.image}
            alt="Artisan baker arranging cookies"
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-1/2">
          <span className="text-on-primary-container font-headline font-extrabold uppercase tracking-[0.2em] text-sm mb-6 block">
            {aboutTeaser.label}
          </span>
          <h2 className="text-5xl mb-8 leading-tight">{aboutTeaser.headline}</h2>
          <div className="space-y-6 text-lg text-secondary leading-relaxed font-light">
            {aboutTeaser.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-primary font-headline font-extrabold text-lg group"
            >
              {aboutTeaser.cta}
              <span className="w-12 h-[2px] bg-on-primary-container group-hover:w-16 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
