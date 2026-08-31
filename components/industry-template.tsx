/* oxlint-disable next/no-img-element */
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  Eye,
  GraduationCap,
  KeyRound,
  LampDesk,
  MapPin,
  MessageCircle,
  MoonStar,
  PackageCheck,
  Radio,
  Route,
  ShieldCheck,
  UsersRound,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { industries, type Industry } from '@/lib/industry-data';

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

function Actions() {
  return (
    <div className="actions">
      <button className="button button-primary" type="button">Discuss Your Project <ArrowRight size={16} /></button>
      <button className="button button-secondary" type="button">View Products <ArrowDownRight size={16} /></button>
    </div>
  );
}

function ProductPills({ products }: { products: string[] }) {
  return <div className="product-pills">{products.map((product) => <span key={product}>{product}</span>)}</div>;
}

function ZoneList({ zones }: { zones: string[] }) {
  return <div className="zone-grid">{zones.map((zone, index) => <span key={zone}><b>{String(index + 1).padStart(2, '0')}</b> {zone}</span>)}</div>;
}

function Requirement({ industry }: { industry: Industry }) {
  return <p className="requirement-note"><b>{industry.name} requirement:</b> {industry.requirement}</p>;
}

function TemplateKicker({ industry }: { industry: Industry }) {
  return <div className="template-kicker"><span>Template {industry.templateNumber}</span><span>{industry.name}</span></div>;
}

function BackLink() {
  return <Link className="back-link" href="/"><ArrowLeft size={15} /> Back to all industries</Link>;
}

const whatsAppUrl = 'https://wa.me/97366766652';

function TemplateHeader() {
  return (
    <header className="route-header">
      <div className="shell route-navbar">
        <Link className="wordmark" href="/" aria-label="EYORA home"><img alt="EYORA" src="/images/eyora-logo.png" /></Link>
        <nav className="route-primary-nav" aria-label="Main navigation">
          <Link href="#products">Products</Link>
          <Link href="#template">How It Works</Link>
          <Link href="/#industries">Industries</Link>
          <Link href="/">Why Eyora</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <a className="nav-whatsapp" href={whatsAppUrl} rel="noreferrer" target="_blank">WhatsApp Us</a>
      </div>
    </header>
  );
}

function IndustryTabs({ currentIndustry }: { currentIndustry: Industry }) {
  return (
    <nav className="template-industry-tabs" aria-label="Choose an industry template">
      {industries.map((item) => (
        <Link
          aria-current={item.slug === currentIndustry.slug ? 'page' : undefined}
          className={item.slug === currentIndustry.slug ? 'active' : ''}
          href={`/industry/${item.slug}`}
          key={item.slug}
        >
          <span>{item.templateNumber}</span>
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

function ContactCta() {
  return (
    <section className="contact-band shell" id="contact">
      <div className="contact-card">
        <span className="contact-eyebrow"><i /> Talk to us today</span>
        <h2>Ready to plan your camera system?</h2>
        <p>Message us on WhatsApp with your site details — we&apos;ll help you pick the right cameras, NVR and PoE switch for the job.</p>
        <div className="contact-actions">
          <a className="contact-whatsapp" href={whatsAppUrl} rel="noreferrer" target="_blank">
            <MessageCircle size={17} /> Chat on WhatsApp — +973 6676 6652
          </a>
          <Link className="contact-catalog" href="/#industries">Browse Catalog</Link>
        </div>
      </div>
    </section>
  );
}

const productLinks = ['Bullet Cameras', 'Dome Cameras', 'Turret Cameras', 'Cube / Wi-Fi Cameras', 'NVR & Storage', 'PoE Switches'];
const companyLinks = [
  { label: 'How It Works', href: '/' },
  { label: 'Technology', href: '/' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Why Eyora', href: '/' },
  { label: 'Contact', href: '#contact' },
];

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid shell">
        <div className="footer-brand">
          <Link className="footer-logo" href="/" aria-label="EYORA home"><img alt="EYORA" src="/images/eyora-logo.png" /></Link>
          <p>Metal-bodied IP cameras, NVR systems and PoE networking gear. Based in Bahrain.</p>
          <a href={whatsAppUrl} rel="noreferrer" target="_blank"><MessageCircle size={16} /> WhatsApp: +973 6676 6652</a>
        </div>
        <nav className="footer-column" id="products" aria-label="Products">
          <strong>Products</strong>
          {productLinks.map((label) => <Link href="/#industries" key={label}>{label}</Link>)}
        </nav>
        <nav className="footer-column" aria-label="Company">
          <strong>Company</strong>
          {companyLinks.map((link) => <Link href={link.href} key={link.label}>{link.label}</Link>)}
        </nav>
      </div>
      <div className="footer-bottom shell">
        <div className="footer-accent" />
        <div><span>© 2026 Eyora. All rights reserved.</span><span>Bahrain</span></div>
      </div>
    </footer>
  );
}

function RetailTemplate({ industry }: { industry: Industry }) {
  return (
    <section className="template template-retail">
      <TemplateKicker industry={industry} />
      <div className="retail-hero">
        <div className="retail-copy">
          <Eyebrow>{industry.label}</Eyebrow>
          <h1>{industry.headline}</h1>
          <p>{industry.description}</p>
          <Actions />
          <div className="stats-row">{industry.capabilities.map((stat) => <span key={stat}><Check size={14} /> {stat}</span>)}</div>
        </div>
        <div className="visual-frame retail-visual">
          <img alt="Modern retail showroom with entrances, aisles and checkout areas" src={industry.image} />
          <span className="coverage-pin pin-entrance"><MapPin size={14} /> Entrance</span>
          <span className="coverage-pin pin-aisle"><Radio size={14} /> Aisle 03</span>
          <span className="coverage-pin pin-checkout"><ShieldCheck size={14} /> Checkout</span>
          <div className="floating-status"><span className="status-icon"><PackageCheck size={18} /></span><span><small>System status</small><strong>All zones visible</strong></span></div>
        </div>
      </div>
      <div className="retail-details">
        <div className="detail-panel"><span className="mini-label">Protection areas</span><ZoneList zones={industry.zones} /></div>
        <div className="detail-panel"><span className="mini-label">Recommended solution</span><ProductPills products={industry.products} /><Requirement industry={industry} /></div>
      </div>
      <BackLink />
    </section>
  );
}

function ResidentialTemplate({ industry }: { industry: Industry }) {
  return (
    <section className="template template-residential">
      <TemplateKicker industry={industry} />
      <div className="residential-head"><div><Eyebrow>{industry.label}</Eyebrow><h1>{industry.headline}</h1></div><div><p>{industry.description}</p><Actions /></div></div>
      <div className="residential-scene">
        <div className="visual-frame residential-visual"><img alt="Warm gated residential compound" src={industry.image} /><span className="home-pin gate-pin"><KeyRound size={14} /> Main gate</span><span className="home-pin road-pin"><Route size={14} /> Internal road</span><span className="home-pin play-pin"><UsersRound size={14} /> Shared areas</span></div>
        <div className="reassurance-grid">{[MoonStar, Eye, Clock3].map((Icon, index) => <div className="reassurance-card" key={industry.capabilities[index]}><Icon size={20} /><strong>{industry.capabilities[index]}</strong><span>{index === 0 ? 'Visibility through changing light' : index === 1 ? 'Stay connected from anywhere' : 'Recorded coverage when needed'}</span></div>)}</div>
      </div>
      <div className="residential-details"><div><span className="mini-label">Community coverage</span><ZoneList zones={industry.zones} /></div><div><span className="mini-label">Recommended products</span><ProductPills products={industry.products} /><Requirement industry={industry} /></div></div>
      <BackLink />
    </section>
  );
}

function LogisticsTemplate({ industry }: { industry: Industry }) {
  return (
    <section className="template template-logistics">
      <TemplateKicker industry={industry} />
      <div className="logistics-head"><div><Eyebrow>{industry.label}</Eyebrow><h1>{industry.headline}</h1></div><div><p>{industry.description}</p><Actions /></div></div>
      <div className="visual-frame logistics-visual"><img alt="Distribution warehouse with loading and dispatch areas" src={industry.image} /><div className="logistics-overlay"><span><Radio size={15} /> Yard 01</span><span><Radio size={15} /> Dock 06</span><span><Radio size={15} /> Dispatch</span></div></div>
      <div className="operations-flow" aria-label="Operational flow">{['Vehicle Arrival', 'Loading Dock', 'Storage', 'Dispatch'].map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < 3 && <ArrowRight size={17} />}</div>)}</div>
      <div className="logistics-grid">
        <div className="capability-matrix">{industry.capabilities.map((item, index) => <div key={item}><span>{index === 0 ? '120m' : index === 1 ? '24/7' : index === 2 ? '30d' : '360°'}</span><strong>{item}</strong></div>)}</div>
        <div className="logistics-data"><span className="mini-label">Operational coverage</span><ZoneList zones={industry.zones} /></div>
        <div className="logistics-data"><span className="mini-label">Recommended products</span><ProductPills products={industry.products} /><Requirement industry={industry} /></div>
      </div>
      <BackLink />
    </section>
  );
}

function EducationTemplate({ industry }: { industry: Industry }) {
  return (
    <section className="template template-education">
      <TemplateKicker industry={industry} />
      <div className="education-hero"><div className="education-copy"><Eyebrow>{industry.label}</Eyebrow><h1>{industry.headline}</h1><p>{industry.description}</p><Actions /></div><div className="visual-frame education-visual"><img alt="Bright modern education campus" src={industry.image} /><div className="campus-caption"><GraduationCap size={17} /><span><small>Campus overview</small><strong>Connected spaces. Central recording.</strong></span></div></div></div>
      <div className="campus-zones">{[Eye, Radio, Zap, KeyRound].map((Icon, index) => <div key={industry.capabilities[index]}><span className="campus-icon"><Icon size={20} /></span><small>Priority 0{index + 1}</small><strong>{industry.capabilities[index]}</strong><p>{index === 0 ? 'Consistent visibility across the campus' : index === 1 ? 'One NVR for coordinated recording' : index === 2 ? 'Power and data through simple PoE' : 'Clear coverage at gates and entrances'}</p></div>)}</div>
      <div className="education-details"><div><span className="mini-label">Visibility areas</span><ZoneList zones={industry.zones} /></div><div><span className="mini-label">Recommended products</span><ProductPills products={industry.products} /><Requirement industry={industry} /></div></div>
      <BackLink />
    </section>
  );
}

function CorporateTemplate({ industry }: { industry: Industry }) {
  const capabilityNotes = [
    'Low-profile cameras that complement professional interiors',
    'Clear oversight from reception through shared work areas',
    'Reliable visibility around staff and visitor parking',
  ];
  return (
    <section className="template template-corporate">
      <TemplateKicker industry={industry} />
      <div className="corporate-editorial">
        <div className="visual-frame corporate-visual">
          <img alt="Modern corporate office with lobby and shared work areas" src={industry.image} />
          <div className="floor-badge"><LampDesk size={18} /><span><small>Workplace overview</small><strong>Quiet, professional coverage</strong></span></div>
        </div>
        <div className="corporate-copy">
          <Eyebrow>{industry.label}</Eyebrow>
          <h1>{industry.headline}</h1>
          <p>{industry.description}</p>
          <Actions />
          <div className="corporate-capabilities">
            {industry.capabilities.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><small>{capabilityNotes[index]}</small></div>)}
          </div>
        </div>
      </div>
      <div className="corporate-plan">
        <div className="floorplan-card">
          <div className="floorplan-head"><span className="mini-label">Typical office coverage</span><small>Lobby · Floors · Car park</small></div>
          <div className="floorplan-map">
            <span className="floor-zone reception-zone"><i /> Reception</span>
            <span className="floor-zone office-zone"><i /> Office floor</span>
            <span className="floor-zone meeting-zone"><i /> Meeting rooms</span>
            <span className="floor-zone server-zone"><i /> Server room</span>
          </div>
        </div>
        <div className="corporate-lists">
          <div><span className="mini-label">Coverage areas</span><ZoneList zones={industry.zones} /></div>
          <div><span className="mini-label">Recommended products</span><ProductPills products={industry.products} /><Requirement industry={industry} /></div>
        </div>
      </div>
      <BackLink />
    </section>
  );
}

function HospitalityTemplate({ industry }: { industry: Industry }) {
  const featureNotes = [
    'Durable housings for exposed public circulation areas',
    'Low-profile placement that respects the guest experience',
    'Clear operational oversight beyond guest-facing spaces',
  ];
  return (
    <section className="template template-hospitality">
      <TemplateKicker industry={industry} />
      <div className="hospitality-cinema">
        <img alt="Premium hospitality lobby and guest entrance" src={industry.image} />
        <div className="cinema-shade" />
        <span className="cinema-note"><ShieldCheck size={15} /> IK10 guest-area protection</span>
        <div className="hospitality-title">
          <Eyebrow>{industry.label}</Eyebrow>
          <h1>{industry.headline}</h1>
        </div>
      </div>
      <div className="hospitality-editorial">
        <div className="hospitality-intro"><p>{industry.description}</p><Actions /></div>
        <div className="premium-features">
          {[ShieldCheck, Eye, MoonStar].map((Icon, index) => <div key={industry.capabilities[index]}><Icon size={21} /><strong>{industry.capabilities[index]}</strong><span>{featureNotes[index]}</span></div>)}
        </div>
      </div>
      <div className="hospitality-details">
        <div><span className="mini-label">Hospitality coverage</span><ZoneList zones={industry.zones} /></div>
        <div><span className="mini-label">Recommended products</span><ProductPills products={industry.products} /><Requirement industry={industry} /></div>
      </div>
      <BackLink />
    </section>
  );
}

const templates = {
  retail: RetailTemplate,
  corporate: CorporateTemplate,
  residential: ResidentialTemplate,
  logistics: LogisticsTemplate,
  schools: EducationTemplate,
  hospitality: HospitalityTemplate,
};

export function IndustryTemplate({ industry }: { industry: Industry }) {
  const Template = templates[industry.slug];
  return (
    <main className={`industry-route-page ${industry.slug}-route`}>
      <TemplateHeader />
      <div className="route-template-shell shell" id="template">
        <div className="template-title-banner">
          <span>Industry template</span>
          <strong>{industry.name}</strong>
          <i>{industry.templateNumber}</i>
        </div>
        <IndustryTabs currentIndustry={industry} />
        <Template industry={industry} />
      </div>
      <ContactCta />
      <SiteFooter />
      <a className="floating-whatsapp" href={whatsAppUrl} rel="noreferrer" target="_blank" aria-label="Chat with EYORA on WhatsApp">
        <MessageCircle size={24} />
      </a>
    </main>
  );
}
