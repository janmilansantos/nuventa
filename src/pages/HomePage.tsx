import Hero from '@/components/home/Hero';
import FlavorCard from '@/components/home/FlavorCard';
import BestsellerItem from '@/components/home/BestsellerItem';
import TestimonialCard from '@/components/home/TestimonialCard';
import AboutTeaser from '@/components/home/AboutTeaser';
import CtaBanner from '@/components/home/CtaBanner';
import Section, { SectionHeader } from '@/components/layout/Section';
import { signatureFlavors, bestsellers, testimonials } from '@/data/mockData';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Signature Flavors */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            title="Our Signature Flavors"
            subtitle="Each batch is slow-chilled for 48 hours to ensure maximum flavor depth and the perfect chewy-to-crisp ratio."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signatureFlavors.map((flavor) => (
            <FlavorCard key={flavor.title} flavor={flavor} />
          ))}
        </div>
      </Section>

      {/* Bestsellers */}
      <section className="bg-primary py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container opacity-20 blur-3xl rounded-full" />
        <div className="max-w-site mx-auto px-6 relative z-10">
          <h2 className="text-center text-4xl font-headline font-black text-white mb-16 tracking-tight uppercase">
            Our Bestsellers
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            {bestsellers.map((item) => (
              <BestsellerItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      <AboutTeaser />

      {/* Testimonials */}
      <Section alt>
        <h2 className="text-center mb-16 uppercase">
          What Our Cookie Lovers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.author} testimonial={t} index={i} />
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
