import Link from 'next/link'

import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Input } from '../../../components/ui/input'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">About Our Blog</h3>
            <p className="text-sm text-white">
              Discover insightful articles, <br /> <br /> expert opinions, and the latest <br /> <br />trends in our blog.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-3 ">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-900 transition-colors">About</Link></li>
              <li><Link href="/categories" className="hover:text-gray-900 transition-colors">Categories</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-start space-y-1">
    <h3 className="text-lg font-semibold mb-3 text-orange-400">Follow Us</h3>
    <div className="flex flex-col space-y-3">
        <a href="#" className="hover:text-gray-900 transition-colors" aria-label="Facebook">
            <Facebook size={24} />
        </a>
        <a href="#" className="hover:text-gray-900 transition-colors" aria-label="Twitter">
            <Twitter size={24} />
        </a>
        <a href="#" className="hover:text-gray-900 transition-colors" aria-label="Instagram">
            <Instagram size={24} />
        </a>
        <a href="#" className="hover:text-gray-900 transition-colors" aria-label="LinkedIn">
            <Linkedin size={24} />
        </a>
    </div>
</div>




          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Subscribe to Our Newsletter</h3>
            <form className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-2 text-black"
                required
               
              />
              <button type="submit" className="w-full bg-orange-400 rounded-md text-black px-4 py-1.5"  >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Javeria Kamran. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

