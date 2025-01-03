import { notFound } from "next/navigation";
import BlogContent from "../../components/BlogContent";
import type { Metadata } from "next";
import { blogPosts } from "../../../../lib/types/blog";

// Define the type for dynamic route params
type Params = {
  id: string;
};

// Utility function to get a blog post by ID
async function getBlogPostById(id: string) {
  return blogPosts.find((post) => post.id === id) || null;
}

// Blog Post Page Component
export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  // Await the resolved `params` before using it
  const resolvedParams = await params;
  const post = await getBlogPostById(resolvedParams.id);

  if (!post) {
    return notFound(); // Render a 404 page if the blog post isn't found
  }

  return (
    <main className="min-h-screen bg-black py-12">
      <BlogContent
        title={post.title}
        content={post.content}
        image={post.image}
        author={post.author}
        date={post.date}
        readTime={post.readTime}
       
        stats={post.stats}
      />
    </main>
  );
}

// Generate Metadata for the page
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  // Await the resolved `params` before using it
  const resolvedParams = await params;
  const post = await getBlogPostById(resolvedParams.id);

  return {
    title: post ? post.title : "Post Not Found",
    description: post ? post.subtitle : "No blog post found with this ID.",
  };
}

// Generate Static Params for the page
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id, // Generate static params based on blog posts' IDs
  }));
}
