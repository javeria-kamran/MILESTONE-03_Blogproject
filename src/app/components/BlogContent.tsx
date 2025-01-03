'use client'
import { MoreVertical, Facebook, Twitter, Linkedin, Link2, Eye, Heart } from 'lucide-react'
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar'
import { Button } from '../../../components/ui/buttton'
import { Input } from '../../../components/ui/input'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../components/ui/dropdown'
import { Badge } from '../../../components/ui/badge'
import React, { useState } from "react"

interface BlogContentProps {
  title: string
  subtitle?: string
  content: string
  image: string
  author: {
    name: string
    avatar: string
  }
  date: string
  readTime: string
  category?: string
  stats: {
    views: number
    likes: number
  }
}

export default function BlogContent({
  title,
  subtitle,
  content,
  image,
  author,
  date,
  readTime,
  
  stats,
}: BlogContentProps) {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments((prev) => [...prev, newComment]);
      setNewComment(""); // Clear the input field
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
        break
      case 'copy':
        navigator.clipboard.writeText(url)
        break
    }
  }

  return (
    <article className="max-w-4xl mx-auto p-4 font-inter">
      <header className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex items-center space-x-2 text-sm text-white">
              <span className="font-medium">{author.name}</span>
              <span className = "text-orange-500">•</span>
              <time dateTime={date}>{date}</time>
              <span className = "text-orange-500">•</span>
              <span>{readTime}</span>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Report</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
          {title}
        </h1>
        <p className="text-xl text-white mb-6">
          {subtitle}
        </p>
      </header>

      <div className="relative w-full h-[400px] md:h-[600px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt="Blog post header image"
          fill
          className="object-cover border-4 border-orange-700 rounded-md "
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none mb-8 text-white">
        {content.split('\n').map((paragraph, index) => {
          if (paragraph.includes('#')) {
            return (
              <p key={index}>
                {paragraph.split(' ').map((word, wordIndex) => (
                  word.startsWith('#') ? (
                    <span key={wordIndex} className="text-white hover:underline cursor-pointer">
                      {word}{' '}
                    </span>
                  ) : (
                    word + ' '
                  )
                ))}
              </p>
            )
          }
          return <p key={index}>{paragraph}</p>
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between py-2 p-2 rounded-md bg-orange-500 border-orange-800">
        <div className="flex space-x-4 mb-4 md:mb-0 text-black">
          <Button
            
            size="sm"
            onClick={() => handleShare('facebook')}
          >
            <Facebook className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button
            
            size="sm"
            onClick={() => handleShare('twitter')}
          >
            <Twitter className="h-4 w-4 mr-2" />
            Tweet
          </Button>
          <Button
            
            size="sm"
            onClick={() => handleShare('linkedin')}
          >
            <Linkedin className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button
            
            size="sm"
            onClick={() => handleShare('copy')}
          >
            <Link2 className="h-4 w-4 mr-2" />
            Copy
          </Button>
      </div>
      </div>

      <div className="flex items-center justify-between py-6 p-2  border-gray-200">
        <div className="flex items-center space-x-4 text-sm text-white">
          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-1 text-white" />
            <span className = "text-white">{stats.views} views</span>
          </div>
          <div className="flex items-center text-red-500">
            <Heart className="h-4 w-4 mr-1 fill-current" />
            <span>{stats.likes}</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        <div className="space-y-4">
          <Input
            placeholder="Write a comment..."
            className="w-full p-4 h-auto min-h-[100px]"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button
            className="w-full md:w-auto bg-orange-700 text-black  py-2"
            onClick={handleAddComment}
          >
            Post Comment
          </Button>
        </div>
        <div className="mt-6 space-y-4">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="p-4 border rounded-md bg-gray-50 text-gray-800"
            >
              {comment}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
