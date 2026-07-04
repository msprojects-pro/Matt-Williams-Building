import { ServiceItem, GalleryItem, TestimonialItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'masonry',
    title: 'Masonry & Brickwork',
    description: 'Expert structural and decorative stonework, traditional bricklaying, repointing, and dry stone walling tailored for Devon coastal properties.',
    iconName: 'Hammer',
    features: [
      'Traditional Stonemasonry',
      'Structural Brickwork & Blockwork',
      'Heritage Lime Repointing',
      'Dry Stone Garden Walls',
      'Chimney Repairs & Rebuilds'
    ]
  },
  {
    id: 'general-building',
    title: 'General Building & Construction',
    description: 'Comprehensive building solutions from structural steel installations to full new-build masonry works, executed to the highest engineering standards.',
    iconName: 'Construction',
    features: [
      'Structural Openings & Steelwork',
      'Garage & Outbuilding Conversions',
      'Structural Repairs & Reinforcements',
      'Roofing & Carpentry Integrations',
      'Drainage & Sub-structure Works'
    ]
  },
  {
    id: 'extensions',
    title: 'House Extensions & Renovations',
    description: 'Transforming homes with bespoke extensions and complete modernizations, designed to integrate seamlessly with your existing Devon property.',
    iconName: 'Home',
    features: [
      'Single & Multi-Storey Extensions',
      'Kitchen & Living Area Open-Plan Conversions',
      'Barn & Loft Conversions',
      'Exterior Rendering & Cladding',
      'Complete Property Renovations'
    ]
  },
  {
    id: 'landscaping',
    title: 'Landscaping & Garden Work',
    description: 'Complete soft and hard garden design and build, turning Devon outdoor spaces into gorgeous, highly functional extensions of your home.',
    iconName: 'Trees',
    features: [
      'Garden Terracing & Excavation',
      'Timber & Composite Decking',
      'Sleeper Retaining Walls',
      'Artificial & Natural Turf Laying',
      'Bespoke Fencing & Pergolas'
    ]
  },
  {
    id: 'groundworks',
    title: 'Groundworks & Foundations',
    description: 'Solid groundwork preparation and foundation pouring, ensuring all subsequent structural masonry and building work is perfectly supported.',
    iconName: 'HardHat',
    features: [
      'Excavation & Site Clearance',
      'Strip & Raft Foundations',
      'Slab Pouring & Oversites',
      'Drainage & Service Duct Laying',
      'Retaining Wall Footings'
    ]
  },
  {
    id: 'patios-driveways',
    title: 'Patios, Driveways & Paving',
    description: 'Premium driveway and patio installations utilizing high-quality porcelain tiles, natural stone flagstones, block paving, and gravel paths.',
    iconName: 'Grid',
    features: [
      'Modern Porcelain Paving',
      'Natural Sandstone & Slate Patios',
      'Block Paved Driveways',
      'Gravel & Resin Aggregate Drives',
      'Steps, Borders & Decorative Edges'
    ]
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Premium House Extension',
    category: 'building',
    imageUrl: '/house_extension.jpg',
    description: 'Modern light-grey rendered extension with anthracite grey bi-fold glass doors, opening onto a beautifully finished patio.'
  },
  {
    id: 'gal-2',
    title: 'Traditional Stone Masonry',
    category: 'masonry',
    imageUrl: '/masonry_detail.jpg',
    description: 'Close-up of premium professional brickwork and natural stone masonry, featuring perfectly struck lime mortar pointing.'
  },
  {
    id: 'gal-3',
    title: 'Porcelain Patio & Landscaping',
    category: 'landscaping',
    imageUrl: '/landscaping_project.jpg',
    description: 'Complete landscape redesign with elegant grey porcelain paving, custom pressure-treated timber planters, and fresh turf.'
  },
  {
    id: 'gal-4',
    title: 'Natural Sandstone Terrace',
    category: 'landscaping',
    imageUrl: 'https://picsum.photos/seed/terrace-devon/800/600',
    description: 'Multi-level Indian sandstone patio terrace built into a sloped garden in Croyde, framed by custom masonry dry stone walls.'
  },
  {
    id: 'gal-5',
    title: 'Structural Extension & Masonry',
    category: 'building',
    imageUrl: 'https://picsum.photos/seed/masonry-house/800/600',
    description: 'Large structural side-extension under construction in Braunton, matching local natural stone and slate roofing.'
  },
  {
    id: 'gal-6',
    title: 'Bespoke Stone Retaining Wall',
    category: 'masonry',
    imageUrl: 'https://picsum.photos/seed/stone-wall/800/600',
    description: 'Hand-dressed local Devon stone retaining wall, engineered to support a raised lawn area and provide timeless visual charm.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'David & Sarah Jenkins',
    location: 'Braunton, Devon',
    rating: 5,
    text: 'Matt and his team completed our single-storey rear extension and new porcelain patio. From day one, the craftsmanship was outstanding. The masonry work matches our existing house perfectly. Highly professional, clean, and delivered exactly on budget!',
    service: 'House Extension & Paving',
    date: 'May 2026'
  },
  {
    id: 'test-2',
    name: 'Robert Harris',
    location: 'Croyde, Devon',
    rating: 5,
    text: 'We hired Matt Williams Building Co. to build a local stone retaining wall and carry out extensive garden terracing. The stone masonry detail is incredibly beautiful, a real feature in our garden. Absolute master of stonemasonry. Highly recommended.',
    service: 'Masonry & Landscaping',
    date: 'April 2026'
  },
  {
    id: 'test-3',
    name: 'Emily Thompson',
    location: 'Georgeham, Devon',
    rating: 5,
    text: 'Fantastic service from start to finish. They installed a block-paved driveway and rebuilt our front boundary wall using traditional lime mortar. Fast, polite, and very respectful of our neighbors. Will definitely use them again for future work.',
    service: 'Patios & Brickwork',
    date: 'June 2026'
  }
];
