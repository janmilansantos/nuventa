import { Link } from 'react-router-dom';
import { ctaBanner } from '@/data/mockData';

export default function CtaBanner() {
  return (
    <section className="mx-6 my-24 max-w-site md:mx-auto">
      <div className="bg-on-primary-container rounded-card-xl p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-headline font-black text-white mb-8">
            {ctaBanner.headline}
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12">
            {ctaBanner.subtitle}
          </p>
          <Link to="/contact" className="btn btn-pill">
            {ctaBanner.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
