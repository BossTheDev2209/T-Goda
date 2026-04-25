import { motion } from 'framer-motion';

const reviews = [
  {
    date: 'May 12, 2024',
    text: '"An absolute paradise. The views from the Presidential Suite are unmatched. The service was impeccable from start to finish."',
    initials: 'SM',
    name: 'Sophia Martinez',
    country: 'United Kingdom',
    bgColor: '#D7E2FF',
    textColor: '#005CBD',
  },
  {
    date: 'Apr 28, 2024',
    text: '"Excellent facilities and great breakfast selection. The private beach is beautiful, though the city center is a bit of a walk."',
    initials: 'JW',
    name: 'James Wilson',
    country: 'United States',
    bgColor: '#FFD9DD',
    textColor: '#B61B4A',
  },
  {
    date: 'Apr 15, 2024',
    text: '"The spa treatments were heavenly. Truly a five-star experience. We will definitely be coming back next summer."',
    initials: 'AK',
    name: 'Anna Kowalski',
    country: 'Germany',
    bgColor: '#FFDCBD',
    textColor: '#8A5100',
  },
]

const StarIcon = () => (
  <svg className="w-4 h-4 text-[#FACC15]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export default function GuestReviews() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <h2 className="text-lg font-bold text-[#191C22]">Guest Reviews</h2>
        <motion.button 
          whileHover={{ scale: 1.02, y: -2 }} 
          whileTap={{ scale: 0.98 }} 
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="text-sm font-semibold text-[#2563EB] hover:underline"
        >
          Read all 1,248 reviews
        </motion.button>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev) => (
          <div key={rev.initials} className="bg-white rounded-2xl border border-gray-200 p-6">
            {/* Stars & Date */}
            <div className="flex justify-between items-center">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="text-sm text-[#64748B]">{rev.date}</span>
            </div>

            {/* Review Text */}
            <p className="italic text-sm text-[#191C22] mt-4 mb-6 leading-relaxed">{rev.text}</p>

            {/* User Info */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: rev.bgColor, color: rev.textColor }}
              >
                {rev.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#191C22]">{rev.name}</p>
                <p className="text-xs text-[#64748B]">{rev.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
