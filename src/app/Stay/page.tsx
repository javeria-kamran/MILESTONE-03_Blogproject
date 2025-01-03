'use client'
import React from "react";
import BlogContent from "../components/BlogContent";

export default function Stay() {
  const blogs = [
    {
        title: "Pearl Continental: A Legacy of Luxury in Pakistan",
        subtitle: "The Pearl Continental Hotel in Pakistan is a symbol of luxury and hospitality, offering a world-class experience for discerning travelers.",
        content: `The Pearl Continental Hotel in Pakistan is a symbol of luxury and hospitality, offering a world-class experience for discerning travelers. With a legacy of excellence spanning decades, the hotel has consistently set the standard for hospitality in the country. From its opulent accommodations and impeccable service to its diverse dining options and state-of-the-art amenities, the Pearl Continental provides an unforgettable experience for both business and leisure travelers. Whether you're seeking a relaxing getaway or a productive business trip, the hotel's commitment to providing unparalleled service and creating lasting memories ensures a truly exceptional stay.`,
        image: "/images/stay1.jpg", 
        author: { name: "Olivia Carter", avatar: "/images/admin.png" },
        date: "November 30, 2024",
        readTime: "5 min read",
        
        stats: { views: 250, likes: 60 },
      },
  
    {
      title: "Chilling on the Beaches of Maldives",
      subtitle: "Experience the ultimate relaxation on Maldives' white sand beaches",
      content: `The Maldives is the epitome of relaxation. Known for its overwater bungalows and pristine, white sandy beaches, its a destination that promises ultimate tranquility. In this blog, we explore the best beach resorts and activities that will help you unwind from snorkeling with vibrant marine life to enjoying a spa day by the sea. The calm turquoise waters and breathtaking sunsets provide a serene backdrop to a relaxing vacation that you'll never forget.`,
      image: "/images/stay2.jpg", 
      author: { name: "James Anderson", avatar: "/images/admin.png" },
      date: "December 20, 2024",
      readTime: "7 min read",
      
      stats: { views: 200, likes: 50 },
    },
    {
        title: "Turkish Delight: A Stay to Remember.",
        subtitle: "Turkish hotels seamlessly blend modern comfort with the warmth of authentic Turkish hospitality.",
        content: `Turkish hotels seamlessly blend modern comfort with the warmth of authentic Turkish hospitality. From the moment you step inside, you're enveloped in an atmosphere of refined elegance and genuine care. Luxurious accommodations, impeccable service, and a dedication to guest satisfaction are hallmarks of the Turkish hotel experience. Indulge in exquisite Turkish cuisine, unwind in rejuvenating spas, and explore the vibrant cultural tapestry of the country, all within the comfort and luxury of your chosen hotel. A stay in Turkey is more than just a vacation; it's a journey of cultural immersion and unforgettable experiences.`,
        image: "/images/stay3.jpg", 
        author: { name: "Sophia Lee", avatar: "/images/admin.png" },
        date: "January 12, 2025",
        readTime: "6 min read",
        
        stats: { views: 120, likes: 35 },
      },
   
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
