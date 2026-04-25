import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import beachImg from '../assets/beach.png'
import thaiTempleImg from '../assets/thai-temple.png'
import tokyoImg from '../assets/japan-tokyo.png'
import poolImg from '../assets/pool.png'

// Destination city cards data
const destinations = [
  {
    id: 1,
    city: 'Bangkok, Thailand',
    price: '$120',
    badge: 'TOP RATED',
    img: thaiTempleImg,
  },
  {
    id: 2,
    city: 'Tokyo, Japan',
    price: '$250',
    badge: null,
    img: tokyoImg,
  },
  {
    id: 3,
    city: 'Paris, France',
    price: '$180',
    badge: null,
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80',
  },
  {
    id: 4,
    city: 'London, UK',
    price: '$210',
    badge: null,
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80',
  },
]

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative h-[420px] sm:h-[480px] overflow-hidden">
        {/* Background image */}
        <img
          src={beachImg}
          alt="Tropical paradise beach"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {/* Exact Figma: 60px, 800, -1.5px tracking, 60px line-height */}
          <h1 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: '60px',
            lineHeight: '60px',
            letterSpacing: '-1.5px',
            textAlign: 'center',
          }} className="text-white max-w-3xl">
            Escape to Your Perfect<br/>Paradise
          </h1>
          <p className="mt-5 text-base md:text-lg text-white max-w-2xl font-medium">
            Unlock exclusive prices on over 2 million properties and flights across<br/>the globe.
          </p>

          {/* Search bar — always single horizontal row */}
          <div className="mt-8 w-full max-w-[780px] flex flex-row items-center gap-2 bg-white rounded-[20px] shadow-xl p-2.5">
            {/* Destination input */}
            <div className="flex items-center gap-2.5 flex-1 px-4 py-[11px] bg-[#F3F4F6] border border-[#E5E7EB] rounded-xl min-w-0">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0">
                <path d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C12.4333 0 14.5625 0.7625 16.3875 2.2875C18.2125 3.8125 19.35 5.725 19.8 8.025H17.75C17.4333 6.80833 16.8625 5.72083 16.0375 4.7625C15.2125 3.80417 14.2 3.08333 13 2.6V3C13 3.55 12.8042 4.02083 12.4125 4.4125C12.0208 4.80417 11.55 5 11 5H9V7C9 7.28333 8.90417 7.52083 8.7125 7.7125C8.52083 7.90417 8.28333 8 8 8H6V10H8V13H7L2.2 8.2C2.15 8.5 2.10417 8.8 2.0625 9.1C2.02083 9.4 2 9.7 2 10C2 12.1833 2.76667 14.0583 4.3 15.625C5.83333 17.1917 7.73333 17.9833 10 18V20ZM19.1 19.5L15.9 16.3C15.55 16.5 15.175 16.6667 14.775 16.8C14.375 16.9333 13.95 17 13.5 17C12.25 17 11.1875 16.5625 10.3125 15.6875C9.4375 14.8125 9 13.75 9 12.5C9 11.25 9.4375 10.1875 10.3125 9.3125C11.1875 8.4375 12.25 8 13.5 8C14.75 8 15.8125 8.4375 16.6875 9.3125C17.5625 10.1875 18 11.25 18 12.5C18 12.95 17.9333 13.375 17.8 13.775C17.6667 14.175 17.5 14.55 17.3 14.9L20.5 18.1L19.1 19.5ZM13.5 15C14.2 15 14.7917 14.7583 15.275 14.275C15.7583 13.7917 16 13.2 16 12.5C16 11.8 15.7583 11.2083 15.275 10.725C14.7917 10.2417 14.2 10 13.5 10C12.8 10 12.2083 10.2417 11.725 10.725C11.2417 11.2083 11 11.8 11 12.5C11 13.2 11.2417 13.7917 11.725 14.275C12.2083 14.7583 12.8 15 13.5 15Z" fill="#727784"/>
              </svg>
              <input
                type="text"
                placeholder="Where to next?"
                className="flex-1 text-[15px] text-gray-800 placeholder-[#727784] outline-none bg-transparent font-medium min-w-0"
              />
            </div>
            {/* Date input — fixed width, never stacks */}
            <div className="flex items-center gap-2.5 px-4 py-[11px] bg-[#F3F4F6] border border-[#E5E7EB] rounded-xl w-[190px] flex-shrink-0">
              <svg className="w-5 h-5 flex-shrink-0 text-[#727784]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span className="text-[15px] font-medium text-[#727784] whitespace-nowrap">Oct 12 – Oct 18</span>
            </div>
            {/* Search button — fixed width, never stacks */}
            <button
              onClick={() => navigate('/search')}
              className="flex items-center justify-center gap-2 px-6 py-[11px] text-[15px] font-bold text-white transition-colors flex-shrink-0 rounded-xl"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURES SECTION ── */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Best Price Guarantee */}
          <div className="bg-gray-200/60 rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
              <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M11.25 22.5V20H21.25V11.125C21.25 8.6875 20.401 6.61979 18.7031 4.92188C17.0052 3.22396 14.9375 2.375 12.5 2.375C10.0625 2.375 7.99479 3.22396 6.29688 4.92188C4.59896 6.61979 3.75 8.6875 3.75 11.125V18.75H2.5C1.8125 18.75 1.22396 18.5052 0.734375 18.0156C0.244792 17.526 0 16.9375 0 16.25V13.75C0 13.3125 0.109375 12.901 0.328125 12.5156C0.546875 12.1302 0.854167 11.8229 1.25 11.5938L1.34375 9.9375C1.51042 8.52083 1.92188 7.20833 2.57812 6C3.23438 4.79167 4.05729 3.73958 5.04688 2.84375C6.03646 1.94792 7.17188 1.25 8.45312 0.75C9.73438 0.25 11.0833 0 12.5 0C13.9167 0 15.2604 0.25 16.5312 0.75C17.8021 1.25 18.9375 1.94271 19.9375 2.82812C20.9375 3.71354 21.7604 4.76042 22.4062 5.96875C23.0521 7.17708 23.4688 8.48958 23.6562 9.90625L23.75 11.5312C24.1458 11.7188 24.4531 12 24.6719 12.375C24.8906 12.75 25 13.1458 25 13.5625V16.4375C25 16.8542 24.8906 17.25 24.6719 17.625C24.4531 18 24.1458 18.2812 23.75 18.4688V20C23.75 20.6875 23.5052 21.276 23.0156 21.7656C22.526 22.2552 21.9375 22.5 21.25 22.5H11.25ZM8.75 13.75C8.39583 13.75 8.09896 13.6302 7.85938 13.3906C7.61979 13.151 7.5 12.8542 7.5 12.5C7.5 12.1458 7.61979 11.849 7.85938 11.6094C8.09896 11.3698 8.39583 11.25 8.75 11.25C9.10417 11.25 9.40104 11.3698 9.64062 11.6094C9.88021 11.849 10 12.1458 10 12.5C10 12.8542 9.88021 13.151 9.64062 13.3906C9.40104 13.6302 9.10417 13.75 8.75 13.75ZM16.25 13.75C15.8958 13.75 15.599 13.6302 15.3594 13.3906C15.1198 13.151 15 12.8542 15 12.5C15 12.1458 15.1198 11.849 15.3594 11.6094C15.599 11.3698 15.8958 11.25 16.25 11.25C16.6042 11.25 16.901 11.3698 17.1406 11.6094C17.3802 11.849 17.5 12.1458 17.5 12.5C17.5 12.8542 17.3802 13.151 17.1406 13.3906C16.901 13.6302 16.6042 13.75 16.25 13.75ZM5.03125 11.8125C4.88542 9.60417 5.55208 7.70833 7.03125 6.125C8.51042 4.54167 10.3542 3.75 12.5625 3.75C14.4167 3.75 16.0469 4.33854 17.4531 5.51562C18.8594 6.69271 19.7083 8.19792 20 10.0312C18.1042 10.0104 16.3594 9.5 14.7656 8.5C13.1719 7.5 11.9479 6.14583 11.0938 4.4375C10.7604 6.10417 10.0573 7.58854 8.98438 8.89062C7.91146 10.1927 6.59375 11.1667 5.03125 11.8125Z" fill="#1A6BFF"/>
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-900">Best Price Guarantee</h3>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Find a lower price? We'll match it and give you a voucher for your next trip.
            </p>
          </div>

          {/* 24/7 Global Support */}
          <div className="bg-gray-200/60 rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-3">
              <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M11.25 22.5V20H21.25V11.125C21.25 8.6875 20.401 6.61979 18.7031 4.92188C17.0052 3.22396 14.9375 2.375 12.5 2.375C10.0625 2.375 7.99479 3.22396 6.29688 4.92188C4.59896 6.61979 3.75 8.6875 3.75 11.125V18.75H2.5C1.8125 18.75 1.22396 18.5052 0.734375 18.0156C0.244792 17.526 0 16.9375 0 16.25V13.75C0 13.3125 0.109375 12.901 0.328125 12.5156C0.546875 12.1302 0.854167 11.8229 1.25 11.5938L1.34375 9.9375C1.51042 8.52083 1.92188 7.20833 2.57812 6C3.23438 4.79167 4.05729 3.73958 5.04688 2.84375C6.03646 1.94792 7.17188 1.25 8.45312 0.75C9.73438 0.25 11.0833 0 12.5 0C13.9167 0 15.2604 0.25 16.5312 0.75C17.8021 1.25 18.9375 1.94271 19.9375 2.82812C20.9375 3.71354 21.7604 4.76042 22.4062 5.96875C23.0521 7.17708 23.4688 8.48958 23.6562 9.90625L23.75 11.5312C24.1458 11.7188 24.4531 12 24.6719 12.375C24.8906 12.75 25 13.1458 25 13.5625V16.4375C25 16.8542 24.8906 17.25 24.6719 17.625C24.4531 18 24.1458 18.2812 23.75 18.4688V20C23.75 20.6875 23.5052 21.276 23.0156 21.7656C22.526 22.2552 21.9375 22.5 21.25 22.5H11.25ZM8.75 13.75C8.39583 13.75 8.09896 13.6302 7.85938 13.3906C7.61979 13.151 7.5 12.8542 7.5 12.5C7.5 12.1458 7.61979 11.849 7.85938 11.6094C8.09896 11.3698 8.39583 11.25 8.75 11.25C9.10417 11.25 9.40104 11.3698 9.64062 11.6094C9.88021 11.849 10 12.1458 10 12.5C10 12.8542 9.88021 13.151 9.64062 13.3906C9.40104 13.6302 9.10417 13.75 8.75 13.75ZM16.25 13.75C15.8958 13.75 15.599 13.6302 15.3594 13.3906C15.1198 13.151 15 12.8542 15 12.5C15 12.1458 15.1198 11.849 15.3594 11.6094C15.599 11.3698 15.8958 11.25 16.25 11.25C16.6042 11.25 16.901 11.3698 17.1406 11.6094C17.3802 11.849 17.5 12.1458 17.5 12.5C17.5 12.8542 17.3802 13.151 17.1406 13.3906C16.901 13.6302 16.6042 13.75 16.25 13.75ZM5.03125 11.8125C4.88542 9.60417 5.55208 7.70833 7.03125 6.125C8.51042 4.54167 10.3542 3.75 12.5625 3.75C14.4167 3.75 16.0469 4.33854 17.4531 5.51562C18.8594 6.69271 19.7083 8.19792 20 10.0312C18.1042 10.0104 16.3594 9.5 14.7656 8.5C13.1719 7.5 11.9479 6.14583 11.0938 4.4375C10.7604 6.10417 10.0573 7.58854 8.98438 8.89062C7.91146 10.1927 6.59375 11.1667 5.03125 11.8125Z" fill="#B61B4A"/>
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-900">24/7 Global Support</h3>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Our world-class support team is here to help you anywhere, anytime in 40+ languages.
            </p>
          </div>

          {/* Flexible Booking */}
          <div className="bg-gray-200/60 rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M17.5 25V21.25H13.75V18.75H17.5V15H20V18.75H23.75V21.25H20V25H17.5ZM2.5 22.5C1.8125 22.5 1.22396 22.2552 0.734375 21.7656C0.244792 21.276 0 20.6875 0 20V5C0 4.3125 0.244792 3.72396 0.734375 3.23438C1.22396 2.74479 1.8125 2.5 2.5 2.5H3.75V0H6.25V2.5H13.75V0H16.25V2.5H17.5C18.1875 2.5 18.776 2.74479 19.2656 3.23438C19.7552 3.72396 20 4.3125 20 5V12.625C19.5833 12.5625 19.1667 12.5312 18.75 12.5312C18.3333 12.5312 17.9167 12.5625 17.5 12.625V10H2.5V20H11.25C11.25 20.4167 11.2812 20.8333 11.3438 21.25C11.4062 21.6667 11.5208 22.0833 11.6875 22.5H2.5ZM2.5 7.5H17.5V5H2.5V7.5ZM2.5 7.5V5V7.5Z" fill="#8A5100"/>
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-900">Flexible Booking</h3>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Life happens. Most of our properties offer free cancellation for peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRENDING DESTINATIONS ── */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Trending Destinations</h2>
              <p className="text-sm text-gray-500 mt-0.5">Handpicked favorites for your next adventure</p>
            </div>
            <button className="text-sm font-medium text-blue-600 hover:underline">View all</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => navigate('/search')}
                className="cursor-pointer group rounded-2xl overflow-hidden bg-gray-100"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={dest.img}
                    alt={dest.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {dest.badge && (
                    <span className="absolute bottom-3 left-3 text-xs font-bold text-white bg-black/60 px-2 py-1 rounded-full">
                      {dest.badge}
                    </span>
                  )}
                </div>
                {/* Info */}
                <div className="p-3">
                  <p className="text-sm font-semibold text-gray-900">{dest.city}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Starting from <span className="font-semibold text-blue-600">{dest.price}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUMMER SALES BANNER ── */}
      <section className="px-4 py-10">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ backgroundColor: 'var(--color-accent)' }}
          >
            {/* Decorative background icon */}
            <div className="absolute right-48 top-4 opacity-20">
              <svg className="w-40 h-40 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
              </svg>
            </div>

            {/* Text */}
            <div className="relative z-10 text-white max-w-xs sm:max-w-md">
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                Summer Sales: Up to 40% Off!
              </h2>
              <p className="mt-2 text-sm text-white/85 leading-relaxed">
                Exclusive member deals on flights and luxury hotels for your next summer getaway. Valid until Oct 31st.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-5">
                <button className="px-6 py-2.5 rounded-xl text-sm font-semibold text-red-700 bg-white hover:bg-gray-50 transition-colors">
                  Explore Deals
                </button>
                <button className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white border-2 border-white hover:bg-white/10 transition-colors">
                  Join Club T-Goda
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative z-10 w-full sm:w-64 h-44 rounded-2xl overflow-hidden flex-shrink-0">
              <img
                src={poolImg}
                alt="Luxury pool"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── GET TRAVEL DEALS DIRECTLY ── */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-xl mx-auto text-center">
          {/* Mail icon — exact SVG provided by user */}
          <div className="flex justify-center mb-4">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
              <path d="M4 32C2.9 32 1.95833 31.6083 1.175 30.825C0.391667 30.0417 0 29.1 0 28V4C0 2.9 0.391667 1.95833 1.175 1.175C1.95833 0.391667 2.9 0 4 0H36C37.1 0 38.0417 0.391667 38.825 1.175C39.6083 1.95833 40 2.9 40 4V28C40 29.1 39.6083 30.0417 38.825 30.825C38.0417 31.6083 37.1 32 36 32H4ZM20 18L4 8V28H36V8L20 18ZM20 14L36 4H4L20 14Z" fill="var(--color-primary)"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Get Travel Deals Directly</h2>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-sm mx-auto">
            Subscribe to our newsletter and get early access to hidden gems and seasonal discounts. No spam, only adventure.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 text-sm border border-gray-300 rounded-l-xl sm:rounded-r-none rounded-xl sm:rounded-xl outline-none focus:border-[var(--color-primary)] bg-white"
            />
            <button
              className="px-6 py-3 text-sm font-semibold text-white rounded-r-xl sm:rounded-l-none rounded-xl sm:rounded-xl"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Subscribe Now
            </button>
          </div>
          <p className="mt-3 text-xs text-gray-400">
            By subscribing, you agree to our{' '}
            <a href="#" className="underline hover:text-gray-600">Terms of Service</a>{' '}
            and{' '}
            <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
