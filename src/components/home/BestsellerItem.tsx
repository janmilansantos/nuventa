import type { Bestseller } from '@/data/mockData';

interface BestsellerItemProps {
  readonly item: Readonly<Bestseller>;
}

export default function BestsellerItem({ item }: BestsellerItemProps) {
  const size = item.featured ? 'w-64 h-64' : 'w-56 h-56';
  const scale = item.featured ? 'scale-110' : '';
  const nameSize = item.featured ? 'text-2xl' : 'text-xl';
  const btnClass = item.featured
    ? 'px-8 py-3 bg-on-primary-container text-white rounded-full font-bold hover:shadow-lg transition-all uppercase text-sm tracking-widest'
    : 'btn-outline uppercase text-xs tracking-widest';

  return (
    <div className={`text-center group ${scale}`}>
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-on-primary-container/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500" />
        <img
          className={`${size} object-cover rounded-full border-4 border-on-primary-container relative z-10 mx-auto`}
          src={item.image}
          alt={item.name}
          loading="lazy"
        />
      </div>
      <h4 className={`text-white font-headline font-bold ${nameSize} mb-4`}>
        {item.name}
      </h4>
      <button className={btnClass}>Order Now</button>
    </div>
  );
}
