const posts = [
  {
    id: 1,
    title: "MSI RTX 4090 TI 8GB Vram DDR5 Review",
    published: "1 menit yang lalu",
    id_author: "cls1k2jh70000k53pdwacio2y",
    type: "article",
    id_category: "cls1jv5460000vxozmqshl763",
    category: "graphic-cards",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.`,
  },
  {
    id: 2,
    title: "AMD Ryzen 5 5600X Processor Review",
    published: "1 menit yang lalu",
    id_author: "cls1k2jh70000k53pdwacio2y",
    type: "article",
    id_category: "cls1jv5860007vxozai8pagzv",
    category: "processors",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.`,
  },
  {
    id: 3,
    title: "Cara Merubah Tampilan Windows 10 ke Dark Mode",
    published: "1 menit yang lalu",
    id_author: "cls1k2jh70000k53pdwacio2y",
    type: "tutorial",
    id_category: "cls1jv58a000dvxozf9wt4g8i",
    category: "software",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.`,
  },
  {
    id: 4,
    title: "Tutorial Bahasa Pemrograman Python",
    published: "1 menit yang lalu",
    id_author: "cls1k2jh70000k53pdwacio2y",
    type: "tutorial",
    id_category: "cls1jv57t0002vxozc0s0d34l",
    category: "hardware",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat.`,
  },
];

const categories = [
  {
    name: "Graphic Cards",
    slug: "graphic-cards",
    type: "article",
  },
  {
    name: "Processors",
    slug: "processors",
    type: "article",
  },
  {
    name: "Motherboards",
    slug: "motherboards",
    type: "article",
  },
  {
    name: "RAM",
    slug: "ram",
    type: "article",
  },
  {
    name: "Storage",
    slug: "storages",
    type: "article",
  },
  {
    name: "Power Supply",
    slug: "power-supplies",
    type: "article",
  },
  {
    name: "Laptop",
    slug: "laptops",
    type: "article",
  },
  {
    name: "Cooling",
    slug: "coolings",
    type: "article",
  },
  {
    name: "Gaming",
    slug: "gaming",
    type: "article",
  },
  {
    name: "Accessories",
    slug: "accessories",
    type: "article",
  },

  {
    name: "Coding",
    slug: "coding",
    type: "tutorial",
  },
  {
    name: "Software",
    slug: "software",
    type: "tutorial",
  },
  {
    name: "Hardware",
    slug: "hardware",
    type: "tutorial",
  },
  {
    name: "Desain",
    slug: "design",
    type: "tutorial",
  },
];

const author = [
  {
    name: "Wildan",
    email: "wildannurrahman30@gmail.com",
    phone: "081234567890",
    password: "password",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/author.jpg",
  },
];

export { posts, categories, author };
