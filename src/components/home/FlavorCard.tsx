import type { CookieFlavor } from '@/data/mockData';

interface FlavorCardProps {
  readonly flavor: Readonly<CookieFlavor>;
}

export default function FlavorCard({ flavor }: FlavorCardProps) {
  const tagBg =
    flavor.tagStyle === 'warm'
      ? 'bg-secondary-container/50 text-on-secondary-container'
      : 'bg-tertiary-fixed text-on-tertiary-fixed-variant';

  return (
    <div className="group bg-surface-container-lowest rounded-card overflow-hidden shadow-rest hover:shadow-hover transition-all duration-500 hover:-translate-y-2">
      <div className="h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          src={flavor.image}
          alt={flavor.title}
          loading="lazy"
        />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3>{flavor.title}</h3>
          <span className="bg-surface-container-high text-primary px-3 py-1 rounded-full text-sm font-bold">
            {flavor.price}
          </span>
        </div>
        <p className="text-secondary text-sm leading-relaxed mb-6">
          {flavor.description}
        </p>
        <span
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${tagBg}`}
        >
          <span
            className="material-symbols-outlined text-[16px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {flavor.tagIcon}
          </span>
          {flavor.tag}
        </span>
      </div>
    </div>
  );
}
