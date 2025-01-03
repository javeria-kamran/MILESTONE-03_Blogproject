import { blogPosts } from "../../../lib/types/blog"
import BlogCard from "../components/BlogCard"

export default function BlogPage() {
  return (
    <main className="min-h-screen  py-[5rem] ">
      <div className="container mx-auto ">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Trending Blogs</h1>
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </main>
  )
}

