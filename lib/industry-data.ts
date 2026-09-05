export type IndustrySlug =
  | 'retail'
  | 'corporate'
  | 'residential'
  | 'logistics'
  | 'schools'
  | 'hospitality';

export type Industry = {
  slug: IndustrySlug;
  name: string;
  cardDescription: string;
  label: string;
  headline: string;
  description: string;
  image: string;
  templateNumber: string;
  zones: string[];
  products: string[];
  capabilities: string[];
  requirement: string;
};

export const industries: Industry[] = [
  {
    slug: 'retail',
    name: 'Retail & Commercial',
    cardDescription: 'Entrance, till and stockroom coverage with clear low-light footage.',
    label: 'Retail & commercial security',
    headline: 'Clear coverage from entrance to stockroom.',
    description: 'Entrance, till and stockroom coverage with clear low-light footage.',
    image: '/images/retail-mounted.png',
    templateNumber: '01',
    zones: ['Customer entrances', 'Tills and checkout', 'Sales floors', 'Stockrooms', 'Delivery access', 'Customer parking'],
    products: ['Low-Light Turret Cameras', 'Dome Cameras', 'Bullet Cameras', 'NVR & Storage', 'PoE Switches'],
    capabilities: ['Low-Light Clarity', 'Till-Level Detail', 'Stockroom Visibility'],
    requirement: 'Keep entrances, transactions and stock areas visible with reliable detail throughout changing light conditions.',
  },
  {
    slug: 'corporate',
    name: 'Offices & Corporate',
    cardDescription: 'Discreet dome and turret cameras for lobbies, floors and car parks.',
    label: 'Office & corporate security',
    headline: 'Discreet security for the modern workplace.',
    description: 'Discreet dome and turret cameras for lobbies, floors and car parks.',
    image: '/images/corporate.png',
    templateNumber: '02',
    zones: ['Reception and lobbies', 'Office floors', 'Meeting rooms', 'Server rooms', 'Access points', 'Employee car parks'],
    products: ['Discreet Dome Cameras', 'Turret Cameras', 'Access-Area Cameras', 'Central NVR', 'PoE Switches'],
    capabilities: ['Discreet Coverage', 'Floor-Wide Visibility', 'Car-Park Monitoring'],
    requirement: 'Protect people, workspaces and access points with professional coverage that blends into the office environment.',
  },
  {
    slug: 'residential',
    name: 'Residential Compounds',
    cardDescription: 'Perimeter bullet cameras and Wi-Fi cube cameras for gates and villas.',
    label: 'Residential compound security',
    headline: 'Confident protection from gate to villa.',
    description: 'Perimeter bullet cameras and Wi-Fi cube cameras for gates and villas.',
    image: '/images/residential.png',
    templateNumber: '03',
    zones: ['Compound gates', 'Villa entrances', 'Property perimeters', 'Internal roads', 'Shared spaces', 'Resident parking'],
    products: ['Perimeter Bullet Cameras', 'Wi-Fi Cube Cameras', 'Entrance Dome Cameras', 'NVR & Storage', 'PoE Switches'],
    capabilities: ['Perimeter Monitoring', 'Remote Mobile Viewing', 'Reliable Recording'],
    requirement: 'Combine dependable perimeter coverage with simple Wi-Fi visibility for gates, villas and shared residential spaces.',
  },
  {
    slug: 'logistics',
    name: 'Warehousing & Logistics',
    cardDescription: 'Wide-angle NVR setups covering loading docks and long aisles.',
    label: 'Warehousing & logistics security',
    headline: 'Wide-angle visibility across every operation.',
    description: 'Wide-angle NVR setups covering loading docks and long aisles.',
    image: '/images/logistics.png',
    templateNumber: '04',
    zones: ['Vehicle arrival', 'Loading docks', 'Long storage aisles', 'Dispatch areas', 'External yards', 'Stock handling'],
    products: ['Wide-Angle Cameras', 'Varifocal Bullet Cameras', 'Low-Light Dome Cameras', 'High-Capacity NVR', 'PoE Switches'],
    capabilities: ['Wide-Angle Coverage', 'Long-Aisle Detail', 'Loading-Dock Visibility', 'Central NVR Recording'],
    requirement: 'Maintain clear operational visibility across loading activity, long warehouse aisles and high-traffic dispatch zones.',
  },
  {
    slug: 'schools',
    name: 'Education',
    cardDescription: 'Campus-wide coverage with centralized NVR recording and PoE simplicity.',
    label: 'Education security',
    headline: 'Campus-wide coverage, simply connected.',
    description: 'Campus-wide coverage with centralized NVR recording and PoE simplicity.',
    image: '/images/education.png',
    templateNumber: '05',
    zones: ['Main gates', 'Reception', 'Corridors', 'Learning areas', 'Shared spaces', 'Playgrounds', 'Staff parking'],
    products: ['Corridor Dome Cameras', 'Entry Turret Cameras', 'Outdoor Bullet Cameras', 'Central NVR', 'PoE Switches'],
    capabilities: ['Campus-Wide Visibility', 'Centralized Recording', 'Simple PoE Network', 'Controlled Entry Points'],
    requirement: 'Create consistent campus visibility with centralized recording and straightforward PoE connectivity across every building.',
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    cardDescription: 'Vandal-resistant IK10 domes for corridors, entrances and back-of-house.',
    label: 'Hospitality security',
    headline: 'Discreet protection for every guest space.',
    description: 'Vandal-resistant IK10 domes for corridors, entrances and back-of-house.',
    image: '/images/hospitality.png',
    templateNumber: '06',
    zones: ['Guest entrances', 'Reception and lobby', 'Guest corridors', 'Lift areas', 'Service entrances', 'Back-of-house'],
    products: ['IK10 Dome Cameras', 'Discreet Turret Cameras', 'Low-Light Cameras', 'Central NVR', 'PoE Switches'],
    capabilities: ['IK10 Vandal Resistance', 'Discreet Guest Coverage', 'Back-of-House Visibility'],
    requirement: 'Preserve a welcoming guest experience while protecting corridors, entrances and operational areas with durable equipment.',
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
