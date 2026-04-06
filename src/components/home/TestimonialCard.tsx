import type { Testimonial } from '@/data/mockData';

interface TestimonialCardProps {
  readonly testimonial: Readonly<Testimonial>;
  readonly index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const avatarBg = index % 2 === 0
    ? 'bg-secondary-container text-on-secondary-container'
    : 'bg-tertiary-fixed text-on-tertiary-fixed-variant';

  return (
    <div className="bg-white p-10 rounded-card-lg shadow-rest border border-outline-variant/10">
      <div className="flex gap-1 text-on-primary-container mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        ))}
      </div>
      <p className="text-primary italic mb-8 leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${avatarBg}`}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="font-headline font-bold text-primary">{testimonial.author}</p>
          <p className="text-xs text-secondary uppercase tracking-widest">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
