import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const galleryImages = [
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&q=80',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80',
  'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80',
]

const amenities = [
  { icon: '📶', label: 'Free Wi-Fi' },
  { icon: '🏊', label: 'Swimming Pool' },
  { icon: '🅿️', label: 'Free Parking' },
  { icon: '🏋️', label: 'Fitness Center' },
  { icon: '🍽️', label: 'Restaurant' },
  { icon: '💆', label: 'Spa' },
  { icon: '🌅', label: 'Cliff-top View' },
  { icon: '❄️', label: 'Air Conditioning' },
]

const rooms = [
  {
    type: 'Deluxe Cliff Villa',
    beds: '1 King Bed',
    guests: '2 Adults',
    benefits: ['Free Cancellation', 'Breakfast Included'],
    originalPrice: 1200,
    price: 480,
  },
  {
    type: 'Infinity Pool Suite',
    beds: '1 King Bed',
    guests: '2 Adults',
    benefits: ['Free Cancellation'],
    originalPrice: 1600,
    price: 680,
  },
  {
    type: 'Family Garden Villa',
    beds: '2 Queen Beds',
    guests: '4 Adults',
    benefits: ['Free Cancellation', 'Breakfast Included'],
    originalPrice: 2000,
    price: 890,
  },
]

const reviews = [
  {
    id: 1,
    name: 'Sarah K.',
    avatar: 'S',
    score: 9.8,
    label: 'Superb',
    date: 'October 2024',
    text: 'Absolutely stunning property! The cliff-top views are breathtaking and the infinity pool overlooks the Indian Ocean. Staff went above and beyond.',
  },
  {
    id: 2,
    name: 'Marcus T.',
    avatar: 'M',
    score: 9.5,
    label: 'Superb',
    date: 'September 2024',
    text: 'One of the best hotels I\'ve ever stayed in. The private villa with plunge pool was incredible. Will definitely be back!',
  },
  {
    id: 3,
    name: 'Priya M.',
    avatar: 'P',
    score: 9.2,
    label: 'Superb',
    date: 'August 2024',
    text: 'Perfect honeymoon destination. Romantic setting, exceptional food, and the sunset views are unforgettable. Highly recommend.',
  },
]

export default function HotelDetailPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto w-full px-4 py-6">

        {/* ── BREADCRUMB ── */}
        <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1">
          <button onClick={() => navigate('/')} className="hover:text-blue-600">Home</button>
          <span>/</span>
          <button onClick={() => navigate('/search')} className="hover:text-blue-600">Bali, Indonesia</button>
          <span>/</span>
          <span className="text-gray-900">Mandala Sky Luxury Villas</span>
        </nav>

        {/* ── HOTEL HEADER ── */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Mandala Sky Luxury Villas</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="stars text-sm">★★★★☆</span>
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Uluwatu, Bali · Cliff-top view
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
              Save
            </button>
            <button className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              </svg>
              Share
            </button>
          </div>
        </div>

        {/* ── GALLERY ── */}
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-64 sm:h-80 mb-6 rounded-2xl overflow-hidden">
          {/* Main large image */}
          <div className="col-span-2 row-span-2">
            <img src={galleryImages[0]} alt="Hotel main" className="w-full h-full object-cover" />
          </div>
          {/* 4 smaller images */}
          {galleryImages.slice(1).map((img, i) => (
            <div key={i} className="col-span-1 row-span-1 relative overflow-hidden">
              <img src={img} alt={`Hotel view ${i + 2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              {i === 3 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">+12 photos</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── MAIN LAYOUT: info + booking card ── */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 min-w-0">

            {/* ── TABS ── */}
            <div className="flex gap-0 border-b border-gray-200 mb-6 overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'amenities', label: 'Amenities' },
                { id: 'rooms', label: 'Rooms' },
                { id: 'reviews', label: 'Reviews' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* ── OVERVIEW TAB ── */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">About This Property</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Perched dramatically atop the limestone cliffs of Uluwatu, Mandala Sky Luxury Villas offers an unparalleled sanctuary where natural beauty meets refined luxury. Each villa is designed to blend seamlessly with its dramatic cliff-top setting, featuring panoramic views of the Indian Ocean that stretch to the horizon.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our exclusive collection of private pool villas combines authentic Balinese design with contemporary luxury, creating an atmosphere of serene indulgence. Wake up to breathtaking sunrises, relax in your private infinity pool, and let our dedicated villa hosts attend to your every need.
                </p>
              </div>
            )}

            {/* ── AMENITIES TAB ── */}
            {activeTab === 'amenities' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {amenities.map((a) => (
                    <div key={a.label} className="bg-gray-50 rounded-xl p-3 flex items-center gap-2.5">
                      <span className="text-xl">{a.icon}</span>
                      <span className="text-sm text-gray-700">{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── ROOMS TAB ── */}
            {activeTab === 'rooms' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Your Room</h2>
                <div className="space-y-4">
                  {rooms.map((room) => (
                    <div key={room.type} className="border border-gray-200 rounded-2xl p-4 bg-white">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">{room.type}</h3>
                          <p className="text-xs text-gray-500 mt-0.5">{room.beds} · {room.guests}</p>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {room.benefits.map((b) => (
                              <span key={b} className="text-xs text-green-700 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-xs text-gray-400 line-through">${room.originalPrice}</p>
                          <p className="text-xl font-bold text-gray-900">${room.price}</p>
                          <p className="text-xs text-gray-400">/night</p>
                          <button
                            className="mt-2 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                            style={{ backgroundColor: 'var(--color-primary)' }}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── REVIEWS TAB ── */}
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-gray-900">9.5</p>
                    <p className="text-xs text-gray-500 mt-0.5">Superb</p>
                  </div>
                  <div className="flex-1">
                    {[
                      { label: 'Location', score: 9.8 },
                      { label: 'Cleanliness', score: 9.7 },
                      { label: 'Service', score: 9.6 },
                      { label: 'Value', score: 9.2 },
                    ].map((r) => (
                      <div key={r.label} className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-gray-500 w-20">{r.label}</span>
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${r.score * 10}%`, backgroundColor: 'var(--color-primary)' }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-gray-700 w-8 text-right">{r.score}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {reviews.map((rev) => (
                    <div key={rev.id} className="border border-gray-100 rounded-2xl p-4 bg-white">
                      <div className="flex items-start gap-3 mb-2">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                          style={{ backgroundColor: 'var(--color-primary)' }}
                        >
                          {rev.avatar}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{rev.name}</p>
                          <p className="text-xs text-gray-400">{rev.date}</p>
                        </div>
                        <div className="ml-auto flex items-center gap-1.5">
                          <span className="text-sm font-bold text-white px-2 py-0.5 rounded" style={{ backgroundColor: 'var(--color-primary)' }}>
                            {rev.score}
                          </span>
                          <span className="text-xs text-gray-500">{rev.label}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{rev.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT BOOKING CARD ── */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-5 sticky top-20">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-xs text-gray-400 line-through">$1,200</span>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>$480</span>
                <span className="text-sm text-gray-400">/night</span>
                <span className="ml-2 text-xs font-bold text-white px-2 py-0.5 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }}>
                  60% OFF
                </span>
              </div>

              {/* Booking form */}
              <div className="space-y-3 mb-4">
                <div className="border border-gray-200 rounded-xl px-3 py-2.5">
                  <p className="text-[10px] text-gray-400 font-medium">CHECK-IN</p>
                  <p className="text-sm text-gray-900 font-semibold">Oct 12, 2024</p>
                </div>
                <div className="border border-gray-200 rounded-xl px-3 py-2.5">
                  <p className="text-[10px] text-gray-400 font-medium">CHECK-OUT</p>
                  <p className="text-sm text-gray-900 font-semibold">Oct 19, 2024</p>
                </div>
                <div className="border border-gray-200 rounded-xl px-3 py-2.5">
                  <p className="text-[10px] text-gray-400 font-medium">GUESTS</p>
                  <p className="text-sm text-gray-900 font-semibold">2 Adults, 1 Room</p>
                </div>
              </div>

              {/* Price breakdown */}
              <div className="space-y-1.5 text-sm border-t border-gray-100 pt-4 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>$480 × 7 nights</span>
                  <span>$3,360</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Cleaning fee</span>
                  <span>$80</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Service fee</span>
                  <span>$120</span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 border-t border-gray-100 pt-2 mt-2">
                  <span>Total</span>
                  <span>$3,560</span>
                </div>
              </div>

              <button
                className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Book Now
              </button>
              <p className="text-xs text-gray-400 text-center mt-2">Free cancellation before Oct 10</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
