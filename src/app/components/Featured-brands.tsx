import { Separator } from "../../../components/ui/separator";

export default function FeaturedBrands() {
  return (
    <div className="w-full bg-[#ff7a21] my-11 py-8 px-4 flex justify-evenly">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-11">
          <div className="text-[#1a1a1a] font-serif text-xl">
            Most visited in
          </div>
          <Separator className="hidden md:block h-8 w-px bg-gray-900" orientation="vertical" />

          
          <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex items-center gap-12">
              <div className="flex flex-col items-center">
                <span className="font-inter font-bold text-xl">Restaurant</span>
                <span className="font-inter text-lg -mt-1">blog</span>
              </div>
              
              
              <div className="flex items-center gap-2 font-inter font-bold text-xl">
                <span>Country</span>
                <span className="text-sm">✈</span>
                <span>TOUR</span>
              </div>
            </div>
            
            
            <div className="flex items-center gap-16">
              <div className="font-inter font-bold text-xl tracking-wider">
                WORLD TRAVEL
              </div>
              
              
              <div className="flex items-center gap-2 font-inter text-xl">
                <span>Eatgallery</span>
                <span className="text-gray-800">☁</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

