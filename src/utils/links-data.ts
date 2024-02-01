export type NavLinks = {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string }[];
};

export const links: NavLinks[] = [
  { name: "Home", href: "/home" },
  {
    name: "Artikel",
    href: "/article",
    hasDropdown: true,
    dropdownItems: [
      { name: "Semua Artikel", href: "/article" },
      { name: "Graphics Cards", href: "/article/graphic-cards" },
      { name: "Processors", href: "/article/processors" },
      { name: "Motherboards", href: "/article/motherboards" },
      { name: "Storage", href: "/article/storage" },
      { name: "RAM", href: "/article/ram" },
      { name: "Power Supply", href: "/article/power-supply" },
      { name: "Cooling", href: "/article/cooling" },
      { name: "Gaming", href: "/article/gaming" },
      { name: "Laptop", href: "/article/laptop" },
      { name: "Accessories", href: "/article/accessories" },
    ],
  },
  {
    name: "Tutorial",
    href: "/tutorial",
    hasDropdown: true,
    dropdownItems: [
      { name: "Semua Tutorial", href: "/tutorial" },
      { name: "Coding", href: "/tutorial/coding" },
      { name: "Desain", href: "/tutorial/design" },
      { name: "Software", href: "/tutorial/software" },
      { name: "Hardware", href: "/tutorial/hardware" },
    ],
  },
  { name: "Kontak Kami", href: "/contact-us" },
];
