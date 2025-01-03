import Image from "next/image"
import { Eye, MessageSquare, Heart } from 'lucide-react'
import Link from "next/link"
import { BlogPost } from "../../../lib/types/blog"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"

export default function BlogCard(post: BlogPost) {
  return (
    <article className="max-w-4xl mx-auto p-4 font-inter ">
      <Link href={`/blog/${post.id}`}>
        <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={`Header image for ${post.title}`}
            fill
            className="object-cover transition-transform hover:scale-105 duration-300"
            priority
          />
        </div>
      </Link>
      
      <div className="flex items-center space-x-4 mb-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={post.author.avatar} alt={post.author.name} />
          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex items-center space-x-2 text-sm text-white">
          <span className="font-medium">{post.author.name}</span>
          <span className = "text-orange-600">•</span>
          <time dateTime={post.date}>{post.date}</time>
          <span className = "text-orange-600">•</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      <Link href={`/blog/${post.id}`} className="block group">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-orange-500 group-hover:text-orange-700 transition-colors">
          {post.title}
        </h2>
      </Link>
      
      <p className="text-white mb-6 text-lg">
        {post.subtitle}
      </p>

      <div className="flex items-center space-x-6 text-gray-500 text-sm">
        <div className="flex items-center space-x-2">
          <Eye className="h-4 w-4" />
          <span>{post.stats.views}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MessageSquare className="h-4 w-4" />
          <span>{post.stats.comments}</span>
        </div>
        <div className="flex items-center space-x-2 text-red-500">
          <Heart className="h-4 w-4 fill-current" />
          <span>{post.stats.likes}</span>
        </div>
      </div>
    </article>
  )
}

