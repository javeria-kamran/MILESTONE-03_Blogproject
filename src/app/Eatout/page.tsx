'use client'
import React from "react";
import BlogContent from "../components/BlogContent";

export default function Eatout() {
  const blogs = [
    {
      title: "Mangiare la pasta in Italia",
      subtitle: "Oh, how I love twirling my forkful of al dente pasta in Italy, savoring each bite of pure joy!",
      content: `From the al dente bite of perfectly cooked pasta to the rich, satisfying sauces made with seasonal vegetables, herbs, and locally sourced cheeses, Italian pasta is a culinary experience that tantalizes the senses.In Italy, pasta is a celebration of simple, fresh ingredients, where the quality of the pasta itself and the vibrant flavors of local produce take center stage.`,
      image: "/images/pastaa.avif", // Add the actual path to the image
      author: { name: "John Doe", avatar: "/images/admin.png" },
      date: "January 1, 2025",
      readTime: "5 min read",
       
      stats: { views: 800, likes: 360 },
    },
    {
      title: "Biryani in Pakistan: A flavor explosion!",
      subtitle: "Biryani in Pakistan is a symphony of flavors, a fragrant and flavorful rice dish that's a beloved national treasure.",
      content: `From the bustling streets of Karachi to the serene valleys of the North, the aroma of sizzling biryani fills the air, a testament to Pakistan's rich culinary heritage,Whether it's the spicy Sindhi biryani, the aromatic Lahori biryani, or the flavorful Peshawari biryani, each region adds its own unique twist to this beloved dish.`,
      image: "/images/bir.jpg", // Add the actual path to the image
      author: { name: "Aurangzeb Khan", avatar: "/images/admin.png" },
      date: "December 20, 2024",
      readTime: "7 min read",
       
      stats: { views: 1000, likes: 800 },
    },
    {
      title: "Tacos in Mexico: A fiesta of flavors!",
      subtitle: "In Mexico, tacos are a culinary adventure, a celebration of diverse flavors and regional specialties.",
      content: `From the simple yet satisfying al pastor tacos sizzling on the street corners to the gourmet creations found in upscale restaurants, tacos in Mexico offer an endless array of flavors and textures to tantalize the taste buds,Whether enjoyed as a casual street food or savored as a celebratory meal, tacos in Mexico provide a unique and unforgettable taste of the country's vibrant culture and culinary soul.`,
      image: "/images/tacos.jpg",
      author: { name: "Mark Johnson", avatar: "/images/admin.png" },
      date: "November 15, 2024",
      readTime: "6 min read",
       
      stats: { views: 500, likes: 289 },
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {blogs.map((blog, index) => (
        <BlogContent
          key={index}
          title={blog.title}
          subtitle={blog.subtitle}
          content={blog.content}
          image={blog.image}
          author={blog.author}
          date={blog.date}
          readTime={blog.readTime}
          stats={blog.stats}
        />
      ))}
    </div>
  );
}
