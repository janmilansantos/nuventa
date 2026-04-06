export interface NavLink {
  readonly label: string;
  readonly path: string;
}

export const navLinks: readonly NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export type CookieCategory = 'Classic' | 'Seasonal' | 'Custom Platters';

export interface CookieFlavor {
  readonly title: string;
  readonly price: string;
  readonly description: string;
  readonly image: string;
  readonly tag: string;
  readonly tagIcon: string;
  readonly tagStyle: 'warm' | 'accent';
}

export const signatureFlavors: readonly CookieFlavor[] = [
  {
    title: 'Classic Choc Chip',
    price: '$4.50',
    description: 'Bourbon vanilla bean dough folded with 70% dark chocolate chunks and Maldon sea salt.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN65W4ciZgDfwznTVb01nWBq0GnbY3QTBIDxewDt0zROTVNOAprO-W68brhJAGNgpDDs5KT_50_ShExdE_aaYzW7AC66yJJdoS-JsWHuQnKZo7EW6kf4Q8tirzncjFYAvAAWBczhztCIs_wtev-cSXFqwbhCWKQHhygQ4-LmXZAd7NFwK4ToJcGJowPB4WHw3FwVoeb2H34HxnR9oxYmbWiCTdSUVTIOQVKOw9k0YdgPMp1sumDyJNPdx5E844ElBUL0th4RrVZ-80',
    tag: 'Top Seller',
    tagIcon: 'star',
    tagStyle: 'warm',
  },
  {
    title: 'Double Dark',
    price: '$4.75',
    description: 'Dutch-processed cocoa dough packed with Belgian dark chocolate and espresso notes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8kZGiq4zTxmpUTJo7BkoiUJ5LW08FinCtHm-77CEaigzp8IhL5J26TDWlcy5c34MS9hyZMttBx1C_Ake9cI3te9H5dpCryCIuqIXIZn46r8P1B2vJH1VaK4SmyFWKu8iORbG4K8YlxFpXA1AHb8njRiHunxX58F-WPMxbgil7HoJ_NnB3GcTkldJWZHYTM93xHh8o19BLv5W6mGr7Z2JZ0EyB1tnyxRcp_f7mMq7HlLQgCOyqebczOWSO7qWiiGZVXrM807PQwmOZ',
    tag: 'Intense',
    tagIcon: 'local_fire_department',
    tagStyle: 'accent',
  },
  {
    title: 'Caramel Pecan',
    price: '$5.00',
    description: 'Hand-made caramel swirls and slow-roasted Georgia pecans in a brown butter base.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCybsdhZdQZgtYrQ5jQmZJuktFqU6vASLxfQXtZVpS-e_uoc_FRQW8fl2xPA2rv3xjw9uvl6v03Ox55xoh3yrkiErdHsAry3yN3Hute5tHzPidY1w2ImbUEJXUQa6RNqmj6756D97g1r38GmqdN4u-lUoFXE1ipmNIk4f71Up3UjYHp4Pao1p0zI5W633-Kus_lFW6KYGaKCuMBNOzg7SYHCHFQG6veFbphZmB3om92SaA5MHi7rY8W5fdYkyWc1yq12fJ5LuXmSIQe',
    tag: 'Crunchy',
    tagIcon: 'restaurant',
    tagStyle: 'warm',
  },
  {
    title: 'Matcha White',
    price: '$4.75',
    description: 'Ceremonial grade matcha dough balanced with sweet white chocolate and macadamias.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2O59ZS9RLtCgJS2z7SRxbo6jWP6qyUZHeohEziEu9_-Hm3qVGxodmhtMibMAGfZAIfYbTywzkhVG55hLlx5PDpgXGiD1WOpPqpy_M3gkjVhz06utwAvC6o0YktUtRpb2-JSDZxHaSbNfY1yB1rHIUj8FPLi-8m_rOgDSUruGedR_hTuhbMz0Y0Q-chvOPhqDWvzZIRDc7I6nwXtkI3coKBFGZm_Uw6FustBInmth9_eWe8WH6jq_H9shHYm_zMlZpt9_KwsdBgbVa',
    tag: 'Unique',
    tagIcon: 'eco',
    tagStyle: 'accent',
  },
];

export interface Bestseller {
  readonly name: string;
  readonly image: string;
  readonly featured?: boolean;
}

export const bestsellers: readonly Bestseller[] = [
  {
    name: 'The Original Nuventa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmxdLEij67iP22uBZ1ptK5TkgmW6DuRensk8Lf9rAQZMGybli64qUokB59nggcH4Fk_zfiySVhi4CJ-fyP5ZrIKxyQdeBD6sruoqmfqq5LN9ut6hkvB264XBkCOlcJIOCNDjA-qndhbN4l2Fe0gapfFEpY7Y7arZkYgoFrcYsyIFKv3vKY3CBDr_voiwxJJCPz_LTiPsZis5rx2LA4648CposUottCKKfBr9mexx0ksTktG_u6CW0uJrq3dEjmRjJQAkI57poYO9U-',
  },
  {
    name: 'Midnight Velvet',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwtNhn9jerZkbAUonc-tU7zEykrXjxNmxxWLFnFUG1URIA8HqdG9mpwLlGdwi0KcMnoQ5oFpo2wJwz9XBdAGJmgLX2m3bnhiRM4xJHLyBLyzNrNUEWvq48qNP4RYbQVtu5soORwND975O64vu5-QrKV-stQZV1eG2xYCBZc-VwuaNqhWcj1zAicqlITUgFK6exws_njWYD-OwN8TzohtPQe3t3peFgUvAa2g2qqvhksA7Bs2MFestdDtO331Kv7dmK-pRmQtiqUYrJ',
    featured: true,
  },
  {
    name: 'Nutty Dream',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAk76vNKqOSjMLZs_pAY6kp0rcQuoD35JOYtp9miIzPdxaIkvX8clgS31yAg1-F0PLuB6kOTXQTUfAfA98v5Hs-kq0ZPVxOp56YaFIUEi6AkFewJv860Y1R4xo3V3kBIZtBaWZOiBA8ujFoDufz8ouacrWnfyCLnnhM2JvTcpYUOcB4tRlsKPlQ3aXcnJUatfPMJLoVV4aViZYBLSE4bCVSmPr8nXqpc9tN78EwyAsAlA7ykznIJGxQTKA-oTZyvnBxBaaj40slz5L',
  },
];

export interface Testimonial {
  readonly quote: string;
  readonly author: string;
  readonly role: string;
  readonly initials: string;
}

export const testimonials: readonly Testimonial[] = [
  {
    quote: 'The Salted Caramel Pecan is a religious experience. I\'ve never had a cookie with this much depth and texture.',
    author: 'Eleanor Ashby',
    role: 'Food Critic',
    initials: 'EA',
  },
  {
    quote: 'Finally, a bakery that understands the importance of high-quality dark chocolate. These are the gold standard.',
    author: 'Marcus Jordan',
    role: 'Local Regular',
    initials: 'MJ',
  },
  {
    quote: 'The packaging alone is beautiful, but the cookies? Absolutely divine. Perfect for gifting (or self-care).',
    author: 'Sarah Kim',
    role: 'Verified Buyer',
    initials: 'SK',
  },
];

export const heroContent = {
  badge: 'Artisan Bakery',
  headline: 'Baked with Love,',
  headlineAccent: 'Crafted with Care',
  subtitle: 'Discover the sensory delight of our small-batch, hand-poured artisan cookies. Made with organic brown butter and premium single-origin chocolate.',
  ctaPrimary: 'Explore Our Flavors',
  ctaSecondary: 'Our Story',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBiu9DD80MLeCPTMyC5em_75uyxClOhRVRcBLQCwDMRZhXJf9uvq4YS_jX3jfzpQq3MpooSEKCaZ6BGpK43mmLUKJL9EwurG0ZoCbubRX3s7S20cQB_UUs8aIx1_yhXTITGEeQHLBb99BzXnK78_9JuFvMx3fn8aMe94Hj3P9x9UTMlBnPFG9RD3HvV_uOscx-5bjWv5m6mUNAs4X_8oN_k0w4Wx63GlG7gpDotjfIZ4rkLcE0ZWgCsdyXcMJYxUh8OMNIxEOtAhhu',
} as const;

export const aboutTeaser = {
  label: 'Our Heritage',
  headline: 'The Nuventa Story',
  paragraphs: [
    'It started in a small sun-drenched kitchen with a simple obsession: the perfect cookie. No shortcuts, no artificial fillers\u2014just honest ingredients and a lot of patience.',
    'At Nuventa, we believe that luxury is found in the details. From the specific temperature of our brown butter to the hand-applied flakes of sea salt, every cookie is a testament to our passion for artisan baking.',
  ],
  cta: 'Learn More About Us',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGIv8sl4ElMBjwXk9mDhA1PdT__EmzrpJGbQ6ZY798-V5y--uvAf-inn627HWFxskv17M1S7PaR0B6rfXgqiTdlmNy67k2ALCNDf4kF3_82IzEQhwCulEWafumXCJEf-baYPiZ9yzvzoMzc7Cs7Rxr45xM3Yd3-iF5_Svb5uiofU3ui7C3Uci61U-SL0HXzsQKUUmHOO_bJbAfITgGINt6PXlEHnqll0VS7FBWRDh8pLBGDJAHk0LcN5XvCoampdrhtM2FTVYKsoiX',
} as const;

export const ctaBanner = {
  headline: 'Ready to Order?',
  subtitle: 'Whether it\u2019s a corporate event, a gift for a loved one, or your weekly treat\u2014we\u2019ve got the perfect batch waiting for you.',
  cta: 'Get in Touch',
} as const;

export const contactInfo = {
  address: '122 Artisan Way, Cookie District\nNew York, NY 10012',
  email: 'hello@nuventa.com',
  emailHref: 'mailto:hello@nuventa.com',
  phone: '+1 (555) 012-3456',
  phoneHref: 'tel:+15550123456',
} as const;

export const footerFlavors = [
  'Double Dark Chocolate',
  'Sea Salt Original',
  'Matcha Macadamia',
  'Seasonal Specials',
] as const;
