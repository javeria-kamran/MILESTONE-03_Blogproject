import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
        <p className="text-gray-600 mb-6">Could not find the requested blog post.</p>
        <Link 
          href="/"
          className="text-orange-600 hover:text-orange-800 underline"
        >
          Return to Home
        </Link>
      </div>
    </div>
  )
}

