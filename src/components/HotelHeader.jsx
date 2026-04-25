import { motion } from 'framer-motion';

export default function HotelHeader() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
      {/* Left Section */}
      <div className="min-w-0">
        {/* Row 1: Breadcrumb */}
        <p className="text-sm text-[#64748B] break-words">
          Home <span className="mx-1">&gt;</span> Greece <span className="mx-1">&gt;</span> Crete Hotels <span className="mx-1">&gt;</span> <span className="font-semibold text-[#191C22]">Grand Azure Resort &amp; Spa</span>
        </p>

        {/* Row 2: Stars & Badge */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-[#FACC15]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="bg-[#2563EB] text-white px-2 py-1 rounded-md text-xs font-bold uppercase">
            REORT
          </span>
        </div>

        {/* Row 3: Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#191C22] mt-2">
          Grand Azure Resort &amp; Spa, Elounda
        </h1>

        {/* Row 4: Location */}
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <svg className="w-4 h-4 text-[#64748B] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm text-[#64748B]">Elounda Bay, Crete, 72053, Greece</span>
          <motion.button 
            whileHover={{ scale: 1.02, y: -2 }} 
            whileTap={{ scale: 0.98 }} 
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="text-sm font-bold text-[#2563EB] hover:underline ml-1"
          >
            Show on map
          </motion.button>
        </div>
      </div>

      {/* Right Section: Action Buttons */}
      <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 mt-4 md:mt-0">
        {/* Share Button */}
        <motion.button 
          whileHover={{ scale: 1.02, y: -2 }} 
          whileTap={{ scale: 0.98 }} 
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="flex items-center justify-center gap-2 border border-[#D1D5DB] rounded-lg px-4 py-2 text-sm text-[#191C22] hover:bg-gray-50 transition-colors w-full sm:w-auto"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          Share
        </motion.button>

        {/* Save Button */}
        <motion.button 
          whileHover={{ scale: 1.02, y: -2 }} 
          whileTap={{ scale: 0.98 }} 
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="flex items-center justify-center gap-2 border border-[#D1D5DB] rounded-lg px-4 py-2 text-sm text-[#191C22] hover:bg-gray-50 transition-colors w-full sm:w-auto"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
          Save
        </motion.button>

        {/* Book Now Button */}
        <motion.button 
          whileHover={{ scale: 1.02, y: -2 }} 
          whileTap={{ scale: 0.98 }} 
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="bg-[#B61B4A] text-white rounded-lg px-6 py-2 text-sm font-semibold hover:brightness-110 transition-all w-full sm:w-auto justify-center"
        >
          Book Now
        </motion.button>
      </div>
    </div>
  )
}
