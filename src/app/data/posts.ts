import post1slide1 from '../../assets/instposts/icpost1/luxury-palette-post15-slide-1.png';
import post1slide2 from '../../assets/instposts/icpost1/luxury-palette-post15-slide-2.png';
import post1slide3 from '../../assets/instposts/icpost1/luxury-palette-post15-slide-3.png';
import post1slide4 from '../../assets/instposts/icpost1/luxury-palette-post15-slide-4.png';
import post1slide5 from '../../assets/instposts/icpost1/luxury-palette-post15-slide-5.png';
import post1slide6 from '../../assets/instposts/icpost1/luxury-palette-post15-slide-6.png';
import post1slide7 from '../../assets/instposts/icpost1/luxury-palette-post15-slide-7.png';

import post2slide1 from '../../assets/instposts/icpost2/typography-masterclass-slide-1.png';
import post2slide2 from '../../assets/instposts/icpost2/typography-masterclass-slide-2.png';
import post2slide3 from '../../assets/instposts/icpost2/typography-masterclass-slide-3.png';
import post2slide4 from '../../assets/instposts/icpost2/typography-masterclass-slide-4.png';
import post2slide5 from '../../assets/instposts/icpost2/typography-masterclass-slide-5.png';
import post2slide6 from '../../assets/instposts/icpost2/typography-masterclass-slide-6.png';
import post2slide7 from '../../assets/instposts/icpost2/typography-masterclass-slide-7.png';

import post3slide1 from '../../assets/instposts/icpost3/premium-gradients-slide-1.png';
import post3slide2 from '../../assets/instposts/icpost3/premium-gradients-slide-2.png';
import post3slide3 from '../../assets/instposts/icpost3/premium-gradients-slide-3.png';
import post3slide4 from '../../assets/instposts/icpost3/premium-gradients-slide-4.png';
import post3slide5 from '../../assets/instposts/icpost3/premium-gradients-slide-5.png';
import post3slide6 from '../../assets/instposts/icpost3/premium-gradients-slide-6.png';
import post3slide7 from '../../assets/instposts/icpost3/premium-gradients-slide-7.png';

import post4slide1 from '../../assets/instposts/cpost4/luxury-colors-slide-1.png';
import post4slide2 from '../../assets/instposts/cpost4/luxury-colors-slide-2.png';
import post4slide3 from '../../assets/instposts/cpost4/luxury-colors-slide-3.png';
import post4slide4 from '../../assets/instposts/cpost4/luxury-colors-slide-4.png';
import post4slide5 from '../../assets/instposts/cpost4/luxury-colors-slide-5.png';
import post4slide6 from '../../assets/instposts/cpost4/luxury-colors-slide-6.png';
import post4slide7 from '../../assets/instposts/cpost4/luxury-colors-slide-7.png';

import post5slide1 from '../../assets/instposts/cpost5/luxury-palette-post14-slide-1.png';
import post5slide2 from '../../assets/instposts/cpost5/luxury-palette-post14-slide-2.png';
import post5slide3 from '../../assets/instposts/cpost5/luxury-palette-post14-slide-3.png';
import post5slide4 from '../../assets/instposts/cpost5/luxury-palette-post14-slide-4.png';
import post5slide5 from '../../assets/instposts/cpost5/luxury-palette-post14-slide-5.png';
import post5slide6 from '../../assets/instposts/cpost5/luxury-palette-post14-slide-6.png';
import post5slide7 from '../../assets/instposts/cpost5/luxury-palette-post14-slide-7.png';

import post6slide1 from '../../assets/instposts/cpost6/luxury-palette-post13-slide-1.png';
import post6slide2 from '../../assets/instposts/cpost6/luxury-palette-post13-slide-2.png';
import post6slide3 from '../../assets/instposts/cpost6/luxury-palette-post13-slide-3.png';
import post6slide4 from '../../assets/instposts/cpost6/luxury-palette-post13-slide-4.png';
import post6slide5 from '../../assets/instposts/cpost6/luxury-palette-post13-slide-5.png';
import post6slide6 from '../../assets/instposts/cpost6/luxury-palette-post13-slide-6.png';
import post6slide7 from '../../assets/instposts/cpost6/luxury-palette-post13-slide-7.png';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
  slides: string[];
  readingTime: string;
  category: string;
}

export const instagramPosts: Post[] = [
  {
    id: "1",
    title: "The Ultimate Luxury Brand Color Psychology",
    excerpt: "Why premium brands are shifting from visual-first to experience-first strategies using elite color palettes.",
    date: "Feb 28, 2026",
    readingTime: "5 min read",
    category: "INSIGHT",
    coverImage: post1slide1,
    slides: [
      post1slide1, post1slide2, post1slide3, post1slide4, post1slide5, post1slide6, post1slide7
    ]
  },
  {
    id: "2",
    title: "Typography Masterclass for Digital Premium UI",
    excerpt: "Dive deep into architectural grid systems, exact font metrics, and tracking rules for high-value brands.",
    date: "Feb 15, 2026",
    readingTime: "7 min read",
    category: "INSIGHT",
    coverImage: post2slide1,
    slides: [
      post2slide1, post2slide2, post2slide3, post2slide4, post2slide5, post2slide6, post2slide7
    ]
  },
  {
    id: "3",
    title: "Creating High-End Web Gradients that Convert",
    excerpt: "How dark premium interfaces leverage subtle 60fps gradients to convey absolute exclusivity and wealth.",
    date: "Jan 30, 2026",
    readingTime: "6 min read",
    category: "INSIGHT",
    coverImage: post3slide1,
    slides: [
      post3slide1, post3slide2, post3slide3, post3slide4, post3slide5, post3slide6, post3slide7
    ]
  },
  {
    id: "4",
    title: "Mastering Luxury Colors in Web Design",
    excerpt: "Learn the secrets behind the color palettes of the world's most luxurious brands and how to apply them.",
    date: "Jan 15, 2026",
    readingTime: "4 min read",
    category: "INSIGHT",
    coverImage: post4slide1,
    slides: [
      post4slide1, post4slide2, post4slide3, post4slide4, post4slide5, post4slide6, post4slide7
    ]
  },
  {
    id: "5",
    title: "Elite Color Systems for Premium Brands",
    excerpt: "Discover how to structure your design system with elite color palettes focused on luxury and exclusivity.",
    date: "Jan 05, 2026",
    readingTime: "6 min read",
    category: "INSIGHT",
    coverImage: post5slide1,
    slides: [
      post5slide1, post5slide2, post5slide3, post5slide4, post5slide5, post5slide6, post5slide7
    ]
  },
  {
    id: "6",
    title: "The Architecture of Luxury UI Design",
    excerpt: "A deep dive into the foundational architecture and visual language of premium, high-converting interfaces.",
    date: "Dec 20, 2025",
    readingTime: "8 min read",
    category: "INSIGHT",
    coverImage: post6slide1,
    slides: [
      post6slide1, post6slide2, post6slide3, post6slide4, post6slide5, post6slide6, post6slide7
    ]
  }
];
