'use client'

import Image from "next/image"

export default function Header() {
    return (
        <header className="relative h-[600px] w-full overflow-hidden">
            <Image
                src="/images/herofinal.jpg"
                alt="Scenic coastal view with boats and cliffs"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute" />
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8 ">
                <div className="text-center">
                    <span className="inline-block font-inter text-2xl sm:text-2xl text-black/90 mb-2 sm:mb-3">
                        Restaurant Blog
                    </span>
                    <h1 className="font-inter font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black leading-tight mb-3 sm:mb-4">
                        PERFECT DESTINATIONS
                    </h1>
                    <p className="font-inter font-semibold text-sm sm:text-base md:text-lg text-black/90 text-center">
                        Food Takes Me Anywhere:)
                    </p>
                </div>
            </div>
        </header>
    )
}

