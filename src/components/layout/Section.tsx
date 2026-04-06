import React from 'react';

interface SectionProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly alt?: boolean;
}

export default function Section({ children, className = '', alt }: SectionProps) {
  return (
    <section className={`py-24 px-6 ${alt ? 'bg-surface-container-low' : 'bg-surface'} ${className}`}>
      <div className="max-w-site mx-auto">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly showBar?: boolean;
}

export function SectionHeader({ title, subtitle, showBar = true }: SectionHeaderProps) {
  return (
    <div className="mb-16">
      <h2 className="mb-4">{title}</h2>
      {showBar && <div className="h-1.5 w-24 bg-on-primary-container rounded-full" />}
      {subtitle && (
        <p className="mt-4 max-w-md italic text-secondary">{subtitle}</p>
      )}
    </div>
  );
}
