// Central place to edit every external link on the site.
// Set `ready: false` on any entry to render it as a "coming soon" card
// instead of a live link.

export interface ShopEntry {
  label: string;
  description: string;
  url: string;
  ready: boolean;
  images?: string[];
}

export const artistWebsite = {
  label: "madeleinebarois.com",
  url: "https://madeleinebarois.com",
};

export const caraProfile = {
  label: "Cara",
  url: "https://cara.app/eelmaiden",
};

export interface PortfolioImage {
  src: string;
  alt: string;
}

export const portfolioImages: PortfolioImage[] = [
  {
    src: "/portfolio/crab-2.jpg",
    alt: "Abstract ink and watercolor piece in coral and sage tones",
  },
  {
    src: "/portfolio/spume.jpg",
    alt: "Abstract ink and watercolor piece in greens and teals",
  },
  {
    src: "/portfolio/crab.jpg",
    alt: "Abstract ink and watercolor piece in warm reds and oranges",
  },
  {
    src: "/portfolio/heavens.jpg",
    alt: "Abstract ink and watercolor piece in warm browns and golds",
  },
  {
    src: "/portfolio/bugs-2.jpg",
    alt: "Watercolor specimen sheet of insects, including a hawk moth, monarch butterfly, and stag beetle",
  },
  {
    src: "/portfolio/dragon-2.jpg",
    alt: "Illustrated dragon-like sea creature in blues, greens, and reds",
  },

  {
    src: "/portfolio/gas-planet.jpg",
    alt: "Abstract ink and watercolor piece in warm browns and golds",
  },
];

export const shopEntries: ShopEntry[] = [
  {
    label: "Main shop",
    description: "Prints, t-shirts, and other products featuring my artwork.",
    // url: "https://shop.vivaria-art.com",
    url: "https://vivaria-designs.printify.me",
    ready: true,
    images: ["/product-2.jpg", "/product-1.jpg", "/product-3.jpg"],
  },
  {
    label: "Redbubble shop",
    description: "Smaller items (stickers, greeting cards, etc.)",
    url: "https://www.redbubble.com/people/EelMaiden/shop",
    ready: true,
    images: ["/sticker-1.jpg", "/sticker-2.jpg", "/sticker-3.jpg"],
  },
  {
    label: "Etsy shop",
    description: "Original art and prints — shop opening soon.",
    url: "#",
    ready: false,
  },
];

export interface SocialEntry {
  label: string;
  url: string;
}

export const socialLinks: SocialEntry[] = [
  { label: "Instagram", url: "https://www.instagram.com/vivaria.art" },
];
