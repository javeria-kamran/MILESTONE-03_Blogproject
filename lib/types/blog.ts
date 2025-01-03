export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  stats: {
    views: number;
    comments: number;
    likes: number;
  };
  content: string;
}

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: "maldives-breakfast",
    title: "Maldives Breakfast: A Tropical Delight",
    subtitle: "Breakfast in the Maldives is a feast for the senses, featuring fresh tropical fruits, flaky pastries, and the catch of the day...",
    image: "/images/breakfast.jpg",
    author: {
      name: "Admin",
      avatar: "/images/admin.png",
    },
    date: "Mar 26, 2023",
    readTime: "1 min read",
    stats: {
      views: 0,
      comments: 0,
      likes: 2,
    },
    content: `
   Breakfast in the Maldives is a feast for the senses, featuring fresh tropical fruits, flaky pastries, and the catch of the day. Imagine waking up to the sound of gentle waves and enjoying a leisurely breakfast on your private balcony overlooking the turquoise waters. The aroma of freshly brewed coffee blends with the sweet scent of tropical flowers as you savor a plate of ripe mangoes, juicy papaya, and succulent dragon fruit. Local delicacies like "roshi," a flatbread, and "mas huni," a spicy tuna dish, offer a taste of Maldivian culture. Don't miss the opportunity to indulge in a traditional Maldivian breakfast and experience the true essence of this idyllic island paradise.
    `  },
  {
    id: "Belgian-Beer",
    title: " Belgian Beer: A World of Flavor.",
    subtitle: "Belgian beer, renowned for its diverse styles and rich flavors, is a testament to centuries of brewing tradition...",
    image: "/images/beer.jpg",
    author: {
      name: "Travel Guide",
      avatar: "/images/admin.png",
    },
    date: "Apr 15, 2023",
    readTime: "3 min read",
    stats: {
      views: 124,
      comments: 5,
      likes: 18,
    },
    content: `
    Belgian beer, renowned for its diverse styles and rich flavors, is a testament to centuries of brewing tradition. From the golden glow of a Belgian Pale Ale to the deep, ruby hue of a Flemish Red Ale, each sip offers a unique sensory experience. The meticulous craftsmanship and dedication to quality have resulted in a vast array of beers, ranging from crisp and refreshing to complex and robust. Whether enjoyed in a cozy pub or savored alongside a hearty meal, Belgian beer offers a taste of history and a celebration of brewing artistry.
    `  },
  {
    id: "Qatar-Hotels",
    title: "Qatari Hospitality: Where Luxury Meets Tradition",
    subtitle: "Qatari hotels are renowned for their luxurious accommodations, impeccable service, and seamless blend of modern amenities with traditional Arabian hospital...",
    image: "/images/qatar.jpg",
    author: {
      name: "Food Explorer",
      avatar: "/images/admin.png",
    },
    date: "May 3, 2023",
    readTime: "2 min read",
    stats: {
      views: 89,
      comments: 3,
      likes: 12,
    },
    content: `
    Qatari hotels are renowned for their luxurious accommodations, impeccable service, and seamless blend of modern amenities with traditional Arabian hospitality. From opulent palaces to contemporary skyscrapers, these establishments offer a diverse range of experiences, catering to the discerning traveler. Immerse yourself in the rich tapestry of Qatari culture through exquisite architecture, authentic cuisine, and personalized service that anticipates your every need. Whether you seek tranquility or vibrant excitement, Qatari hotels provide an unforgettable haven of comfort and luxury.
    `  },
];
