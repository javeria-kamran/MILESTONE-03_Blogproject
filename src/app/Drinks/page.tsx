'use client'
import React from "react";
import BlogContent from "../components/BlogContent";

export default function Drinks() {
  const blogs = [
    {
      title: "Sangria: Spain's vibrant summer sipper.",
      subtitle: "Sangria is a refreshing and flavorful Spanish beverage, perfect for sharing with friends on a warm summer day",
      content: `Sangria is a quintessential Spanish beverage, a vibrant and refreshing concoction that embodies the spirit of the country. Typically made with wine, fruit, and often a touch of brandy, sangria is a delightful and customizable drink. Whether enjoyed in a bustling tapas bar or on a sunny terrace, sangria embodies the spirit of Spanish hospitality. The fruity aromas and enticing flavors of sangria make it a popular choice for celebrations and gatherings throughout Spain. From classic red wine sangria to white wine variations, there's a perfect sangria recipe to suit every taste.`,
      image: "/images/sangaria.jpeg", 
      author: { name: "Emily Brown", avatar: "/images/admin.png" },
      date: "January 10, 2025",
      readTime: "5 min read",
      
      stats: { views: 180, likes: 40 },
    },
    {
      title: "Caipirinha: Brazil's vibrant spirit",
      subtitle: "The caipirinha, a vibrant cocktail made with cachaça, lime, and sugar, is a beloved national drink of Brazil.",
      content: `The caipirinha, a vibrant cocktail made with cachaça, lime, and sugar, is a beloved national drink of Brazil. This refreshing and invigorating beverage perfectly captures the spirit of Brazil, with its lively flavors and tropical essence. The muddling of lime with sugar creates a sweet and tangy base, which is then combined with the distinctive flavor of cachaça, a Brazilian sugarcane spirit. Whether enjoyed on a beachside bar or at a lively celebration, the caipirinha is an essential part of the Brazilian cultural experience, offering a taste of the country's vibrant spirit and warm hospitality.`,
      image: "/images/caipirinha.jpeg", 
      author: { name: "Luca Rossi", avatar: "/images/admin.png" },
      date: "December 15, 2024",
      readTime: "6 min read",
     
      stats: { views: 250, likes: 60 },
    },
    {
      title: "The Ultimate Guide to Sandwich in Japan",
      subtitle: "Sandwich culture and where to find the best in Japan",
      content: `Japan is the birthplace of Sandwich, and it is an integral part of Japanese cuisine and culture. From Sandwich bars in Tokyo to traditional Kaiseki restaurants in Kyoto, Japan offers a variety of Sandwich experiences. This blog takes you on a culinary journey through Japan's Sandwich culture, highlighting the best places to eat Sandwich, the different types of Sandwich you should try, and how to appreciate Sandwich beyond just its taste. If you're a Sandwich lover, this is the ultimate guide to experiencing Sandwich like a local.`,
      image: "/images/pncolada.jpeg", 
      author: { name: "Satoshi Tanaka", avatar: "/images/admin.png" },
      date: "November 25, 2024",
      readTime: "7 min read",
      
      stats: { views: 350, likes: 80 },
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
          category={blog.category}
          stats={blog.stats}
        />
      ))}
    </div>
  );
}
