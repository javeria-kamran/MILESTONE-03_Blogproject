'use client'

import { Facebook, Instagram, PinIcon as Pinterest, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const images = [
  {
    src: '/images/fpic1.jpg',
    alt: 'Fresh strawberries and croissants on a table'
  },
  {
    src: '/images/fpic3.avif',
    alt: 'Food platter with fries and various dips'
  },
  {
    src: '/images/fpicff.png',
    alt: 'Palm trees on a tropical beach at sunset'
  },
  {
    src: '/images/lastf.jpg',
    alt: 'Tropical drink being held up against a beach background'
  }
]

export default function SocialCarousel() {
  return (
    <div className="flex flex-col w-full">
      {/* Social Media Navigation */}
      <nav className="bg-[#000000] text-orange-600 py-4">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center items-center space-x-8 md:space-x-16">
            <li>
              <Link 
                href="#" 
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <Facebook className="w-5 h-5" />
                <span className="hidden sm:inline font-inter">Facebook</span>
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
                <span className="hidden sm:inline font-inter">Instagram</span>
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <Pinterest className="w-5 h-5" />
                <span className="hidden sm:inline font-inter">Pinterest</span>
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <Twitter className="w-5 h-5" />
                <span className="hidden sm:inline font-inter">Twitter</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-80">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
