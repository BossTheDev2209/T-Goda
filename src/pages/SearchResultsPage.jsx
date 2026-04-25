import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const flashDeals = [
  {
    id: 1,
    name: 'Mandala Sky Luxury Villas',
    location: 'Uluwatu, Bali • Cliff-top view',
    stars: 4,
    originalPrice: 1200,
    discountedPrice: 480,
    discount: 60,
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80',
  },
  {
    id: 2,
    name: 'Emerald Jungle Retreat',
    location: 'Ubud, Bali • Private Sanctuary',
    stars: 4,
    originalPrice: 450,
    discountedPrice: 247,
    discount: 45,
    img: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&q=80',
  },
  {
    id: 3,
    name: 'Seminyak Shores Club',
    location: 'Seminyak, Bali • Beachfront Bliss',
    stars: 5,
    originalPrice: 680,
    discountedPrice: 442,
    discount: 35,
    img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&q=80',
  },
]

const regularHotels = [
  {
    id: 4,
    name: 'The Layar Villas',
    location: 'Seminyak, Bali',
    stars: 5,
    rating: 9.4,
    ratingLabel: 'Superb',
    price: 320,
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80',
  },
  {
    id: 5,
    name: 'Alaya Resort Ubud',
    location: 'Ubud, Bali',
    stars: 5,
    rating: 9.1,
    ratingLabel: 'Superb',
    price: 210,
    img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&q=80',
  },
  {
    id: 6,
    name: 'Potato Head Suites',
    location: 'Seminyak, Bali',
    stars: 4,
    rating: 8.8,
    ratingLabel: 'Excellent',
    price: 180,
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80',
  },
]

function StarRating({ count }) {
  return (
    <span className="stars text-xs">
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </span>
  )
}

export default function SearchResultsPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      {/* ── TOP SEARCH BAR ── */}
      <div className="bg-white border-b border-gray-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          {/* Destination */}
          <div className="flex items-center gap-2 flex-1 border border-gray-200 rounded-xl px-4 py-3 bg-white min-w-0">
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <div className="min-w-0">
              <p className="text-[10px] text-gray-400 font-medium">Destination</p>
              <p className="text-sm text-gray-800 font-semibold truncate">Bali, Indonesia</p>
            </div>
          </div>

          {/* Dates */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 bg-white w-full sm:w-52">
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <div>
              <p className="text-[10px] text-gray-400 font-medium">Dates</p>
              <p className="text-sm text-gray-800 font-semibold">Oct 12 – Oct 19, 2024</p>
            </div>
          </div>

          {/* Travelers */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 bg-white w-full sm:w-48">
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
            <div>
              <p className="text-[10px] text-gray-400 font-medium">Travelers</p>
              <p className="text-sm text-gray-800 font-semibold">2 Adults, 1 Room</p>
            </div>
          </div>

          {/* Update Search */}
          <button
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white flex-shrink-0 transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Update Search
          </button>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto w-full px-4 py-6 flex flex-col md:flex-row gap-6">

        {/* ── FILTER SIDEBAR ── */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="10" y1="18" x2="14" y2="18"/>
              </svg>
              <h2 className="text-base font-semibold text-gray-900">Filters</h2>
            </div>

            {/* Price Range */}
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Price Range</h3>
              <input type="range" min="0" max="1000" defaultValue="1000" className="w-full accent-blue-600" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$0</span>
                <span>$1000+</span>
              </div>
            </div>

            <hr className="border-gray-100 mb-5" />

            {/* Property Type */}
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Property Type</h3>
              <div className="space-y-2">
                {['Hotels', 'Resorts', 'Apartments', 'Villas'].map((type) => (
                  <label key={type} className="flex items-center gap-2.5 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-blue-600" />
                    <span className="text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <hr className="border-gray-100 mb-5" />

            {/* Star Rating */}
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Star Rating</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-blue-600" />
                  <span className="stars text-sm">★★★★★</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-blue-600" />
                  <span className="stars text-sm">★★★★<span className="text-gray-300">★</span></span>
                </label>
              </div>
            </div>

            <hr className="border-gray-100 mb-5" />

            {/* Facilities */}
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Facilities</h3>
              <div className="space-y-2">
                {['Free Wi-Fi', 'Swimming Pool', 'Fitness Center', 'Spa', 'Parking', 'Pet Friendly'].map((f) => (
                  <label key={f} className="flex items-center gap-2.5 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-blue-600" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </label>
                ))}
              </div>
            </div>

            <hr className="border-gray-100 mb-5" />

            {/* Review Score */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Review Score</h3>
              <div className="space-y-2">
                {['Superb 9+', 'Very Good 8+', 'Good 7+'].map((r) => (
                  <label key={r} className="flex items-center gap-2.5 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-blue-600" />
                    <span className="text-sm text-gray-700">{r}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* ── RESULTS PANEL ── */}
        <main className="flex-1 min-w-0">
          {/* Results header */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-bold text-gray-900">245 properties in Bali</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="text-sm font-medium text-blue-600 border-none outline-none bg-transparent cursor-pointer">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
          </div>

          {/* ── FLASH DEALS SECTION ── */}
          <div className="bg-white border-2 border-red-100 rounded-2xl overflow-hidden mb-5 shadow-sm">
            {/* Flash header */}
            <div className="flex items-center justify-between px-5 py-3 bg-red-50 border-b border-red-100">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" style={{ color: 'var(--color-accent)' }} fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
                <span className="text-sm font-semibold" style={{ color: 'var(--color-accent)' }}>Flash Deals for You</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Ends in:</span>
                <div className="flex gap-1">
                  {['08', '45', '12'].map((t, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <span className="text-xs font-bold text-white px-1.5 py-0.5 rounded" style={{ backgroundColor: 'var(--color-accent)' }}>{t}</span>
                      {i < 2 && <span className="text-xs font-bold text-red-600">:</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Flash deal cards */}
            <div className="divide-y divide-gray-100">
              {flashDeals.map((hotel) => (
                <div
                  key={hotel.id}
                  onClick={() => navigate('/hotel/1')}
                  className="flex gap-4 p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  {/* Image */}
                  <div className="relative w-36 h-28 flex-shrink-0 rounded-xl overflow-hidden">
                    <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover" />
                    <span
                      className="absolute top-2 left-2 text-xs font-bold text-white px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    >
                      {hotel.discount}% OFF
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 leading-tight">{hotel.name}</h3>
                        <StarRating count={hotel.stars} />
                        <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                          </svg>
                          {hotel.location}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xs text-gray-400 line-through">${hotel.originalPrice}</p>
                        <p className="text-xl font-bold leading-tight" style={{ color: 'var(--color-accent)' }}>
                          ${hotel.discountedPrice}
                        </p>
                        <p className="text-[10px] text-gray-400">/night</p>
                        <button
                          className="mt-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-white transition-opacity hover:opacity-90"
                          style={{ backgroundColor: 'var(--color-accent)' }}
                        >
                          Claim
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── REGULAR HOTEL CARDS ── */}
          <div className="space-y-4">
            {regularHotels.map((hotel) => (
              <div
                key={hotel.id}
                onClick={() => navigate('/hotel/1')}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col sm:flex-row"
              >
                {/* Image */}
                <div className="w-full sm:w-52 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                  <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>

                {/* Info */}
                <div className="flex-1 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">{hotel.name}</h3>
                    <StarRating count={hotel.stars} />
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      {hotel.location}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs font-bold text-white px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--color-primary)' }}>
                        {hotel.rating}
                      </span>
                      <span className="text-xs text-gray-600 font-medium">{hotel.ratingLabel}</span>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-gray-400">From</p>
                    <p className="text-2xl font-bold text-gray-900">${hotel.price}</p>
                    <p className="text-xs text-gray-400">/night</p>
                    <button
                      className="mt-2 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      View Deal
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
