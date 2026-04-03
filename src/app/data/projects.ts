import imgPreleraMain from '../../assets/wamain.png';
import imgPrelera2 from '../../assets/wa2.png';
import imgPrelera3 from '../../assets/wa3.png';

import imgRealEstateMain from '../../assets/resmain.png';
import imgRealEstate2 from '../../assets/res2.png';
import imgRealEstate3 from '../../assets/res3.png';

import imgCoffeeMain from '../../assets/cofmain.png';
import imgCoffee2 from '../../assets/cof2.png';

import imgClothingMain from '../../assets/clomain.png';

export interface Project {
  id: string;
  title: string;
  category: string;
  mainImage: string;
  galleryImages: string[];
  description: string;
  client: string;
  services: string[];
  year: string;
}

export const projects: Project[] = [
  {
    id: "prelera",
    title: "Prelera Water",
    category: "Product Design",
    mainImage: imgPreleraMain,
    galleryImages: [imgPrelera2, imgPrelera3],
    description: "A premium hydration brand redefining the water consumption experience. We created an immersive digital presence that highlights the purity and cutting-edge design of the Prelera bottle, focusing on fluid animations and crisp visuals.",
    client: "Prelera Liquid Co.",
    services: ["UI/UX Design", "3D WebGL", "Brand Identity"],
    year: "2024"
  },
  {
    id: "real-estate",
    title: "Luxe Realty",
    category: "Real Estate Platform",
    mainImage: imgRealEstateMain,
    galleryImages: [imgRealEstate2, imgRealEstate3],
    description: "An exclusive property viewing platform engineered for high-net-worth individuals. The interface prioritizes breathtaking architectural photography with smooth, cinematic transitions to evoke a sense of luxury and space.",
    client: "Luxe Holdings",
    services: ["Web Application", "Interactive Maps", "UX Strategy"],
    year: "2023"
  },
  {
    id: "coffee-masters",
    title: "Brewed Awakening",
    category: "E-Commerce",
    mainImage: imgCoffeeMain,
    galleryImages: [imgCoffee2],
    description: "A bespoke e-commerce experience for an artisanal coffee roaster. Designed to stimulate the senses through warm, rich color palettes and high-performance checkout flows that convert casual visitors into loyal subscribers.",
    client: "Brewed LLC",
    services: ["E-Commerce", "Conversion Optimization", "Motion Design"],
    year: "2024"
  },
  {
    id: "urban-edge",
    title: "Urban Edge",
    category: "Fashion UI",
    mainImage: imgClothingMain,
    galleryImages: [],
    description: "A disruptive online storefront for an avant-garde streetwear label. The site features bold typography, dynamic grids, and unconventional navigation patterns that mirror the brand's rebellious ethos.",
    client: "Urban Edge Apparel",
    services: ["Digital Storefront", "Art Direction", "Frontend Development"],
    year: "2023"
  }
];
