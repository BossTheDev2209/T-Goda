import React from 'react';

import imgMain from '../assets/poolb.png';
import imgSunset from '../assets/sunset.png';
import imgPools from '../assets/pools.png';
import imgCamp from '../assets/camp.png';
import imgFirepool from '../assets/firepool.png';

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[450px]">
      
      {/* Main Image */}
      <div className="col-span-2 md:col-span-2 md:row-span-2">
        <img 
          src={imgMain} 
          alt="Main pool view" 
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Small Image 1 */}
      <div className="col-span-1 md:col-span-1 md:row-span-1">
        <img 
          src={imgSunset} 
          alt="Sunset view" 
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Small Image 2 */}
      <div className="col-span-1 md:col-span-1 md:row-span-1">
        <img 
          src={imgPools} 
          alt="Pools top view" 
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Small Image 3 (Hidden on mobile) */}
      <div className="hidden sm:block md:col-span-1 md:row-span-1">
        <img 
          src={imgCamp} 
          alt="Camp fire" 
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Small Image 4 with Overlay (Hidden on mobile) */}
      <div className="hidden sm:block md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden">
        <img 
          src={imgFirepool} 
          alt="Indoor pool" 
          className="w-full h-full object-cover"
        />
        {/* Overlay + Text */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <span className="text-white font-semibold text-lg">+124 photos</span>
        </div>
      </div>

    </div>
  );
}