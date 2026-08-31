/* oxlint-disable next/no-img-element */
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Hotel,
  House,
  ShoppingBag,
  Warehouse,
} from 'lucide-react';
import Link from 'next/link';
import { industries, type IndustrySlug } from '@/lib/industry-data';

const icons: Record<IndustrySlug, typeof ShoppingBag> = {
  retail: ShoppingBag,
  corporate: Building2,
  residential: House,
  logistics: Warehouse,
  schools: GraduationCap,
  hospitality: Hotel,
};

export default function Home() {
  return (
    <main className="selection-page">
      <header className="site-header shell">
        <Link className="wordmark" href="/" aria-label="EYORA home"><img alt="EYORA" src="/images/eyora-logo.png" /></Link>
        <span className="header-context">Industry template collection</span>
      </header>

      <section className="industry-selector selection-only" id="industries">
        <div className="ambient ambient-one" />
        <div className="shell selector-shell">
          <div className="section-heading selector-heading">
            <span className="eyebrow">Where it fits</span>
            <h1>One catalog, every kind of site.</h1>
          </div>

          <nav className="industry-grid" aria-label="Industry templates">
            {industries.map((industry) => {
              const Icon = icons[industry.slug];
              return (
                <Link className="industry-card" href={`/industry/${industry.slug}`} key={industry.slug}>
                  <span className="industry-icon"><Icon size={24} strokeWidth={1.7} /></span>
                  <span className="industry-card-copy"><strong>{industry.name}</strong><span>{industry.cardDescription}</span></span>
                  <span className="industry-link">View template <ArrowRight size={15} /></span>
                </Link>
              );
            })}
          </nav>
        </div>
      </section>
    </main>
  );
}
