import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { format } from 'date-fns'
import { Calendar } from "../components/ui/calendar"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import beachImg from '../assets/beach.png'
import thaiTempleImg from '../assets/thai-temple.png'
import tokyoImg from '../assets/japan-tokyo.png'
import poolImg from '../assets/pool.png'
import parisImg from '../assets/paris.png'
import londonImg from '../assets/london.png'

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
    img: parisImg,
  },
  {
    id: 4,
    city: 'London, UK',
    price: '$210',
    badge: null,
    img: londonImg,
  },
]

export default function HomePage() {
  const navigate = useNavigate()
  
  // Date range state
  const [date, setDate] = useState({
    from: new Date(2026, 9, 12),
    to: new Date(2026, 9, 18),
  })
  const [showCalendar, setShowCalendar] = useState(false)
  const calendarRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* ── HERO SECTION - Exact Layout Specs ── */}
      <section className="relative px-4 sm:px-6 lg:px-8 mt-[40px] z-10">
        <div 
          className="mx-auto relative"
          style={{
            width: '1200px',
            height: '520px',
            minHeight: '520px',
            borderRadius: '16px',
          }}
        >
          {/* Background Layer (clipping only the image) */}
          <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: '16px' }}>
            {/* Background image */}
            <img
              src={beachImg}
              alt="Tropical paradise beach"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Hero Content */}
          <div className="relative z-20 h-full flex flex-col items-center text-center" style={{ padding: '114px 16px' }}>
            <h1 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: '60px',
              lineHeight: '60px',
              letterSpacing: '-1.5px',
            }} className="text-white max-w-4xl">
              Escape to Your Perfect<br/>Paradise
            </h1>
            <p className="mt-6 text-white max-w-2xl" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '26px',
            }}>
              Unlock exclusive prices on over 2 million properties and flights across the globe.
            </p>

            {/* Search bar — precise Figma specs */}
            <div 
              className="mt-6 w-full flex flex-row items-center shadow-xl"
              style={{
                width: '768px',
                height: '68px',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '8px',
                gap: '8px',
              }}
            >
              {/* Destination Box (Image 2) */}
              <div 
                className="flex items-center gap-2.5 px-3"
                style={{
                  width: '292.29px',
                  height: '52px',
                  backgroundColor: '#E9E9E9',
                  border: '1px solid #6B7FC6',
                  borderRadius: '8px',
                }}
              >
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0">
                  <path d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C12.4333 0 14.5625 0.7625 16.3875 2.2875C18.2125 3.8125 19.35 5.725 19.8 8.025H17.75C17.4333 6.80833 16.8625 5.72083 16.0375 4.7625C15.2125 3.80417 14.2 3.08333 13 2.6V3C13 3.55 12.8042 4.02083 12.4125 4.4125C12.0208 4.80417 11.55 5 11 5H9V7C9 7.28333 8.90417 7.52083 8.7125 7.7125C8.52083 7.90417 8.28333 8 8 8H6V10H8V13H7L2.2 8.2C2.15 8.5 2.10417 8.8 2.0625 9.1C2.02083 9.4 2 9.7 2 10C2 12.1833 2.76667 14.0583 4.3 15.625C5.83333 17.1917 7.73333 17.9833 10 18V20ZM19.1 19.5L15.9 16.3C15.55 16.5 15.175 16.6667 14.775 16.8C14.375 16.9333 13.95 17 13.5 17C12.25 17 11.1875 16.5625 10.3125 15.6875C9.4375 14.8125 9 13.75 9 12.5C9 11.25 9.4375 10.1875 10.3125 9.3125C11.1875 8.4375 12.25 8 13.5 8C14.75 8 15.8125 8.4375 16.6875 9.3125C17.5625 10.1875 18 11.25 18 12.5C18 12.95 17.9333 13.375 17.8 13.775C17.6667 14.175 17.5 14.55 17.3 14.9L20.5 18.1L19.1 19.5ZM13.5 15C14.2 15 14.7917 14.7583 15.275 14.275C15.7583 13.7917 16 13.2 16 12.5C16 11.8 15.7583 11.2083 15.275 10.725C14.7917 10.2417 14.2 10 13.5 10C12.8 10 12.2083 10.2417 11.725 10.725C11.2417 11.2083 11 11.8 11 12.5C11 13.2 11.2417 13.7917 11.725 14.275C12.2083 14.7583 12.8 15 13.5 15Z" fill="#727784"/>
                </svg>
                <input 
                  type="text" 
                  placeholder="Where to next?"
                  className="bg-transparent border-none focus:outline-none w-full text-[15px] font-medium"
                  style={{ color: '#191C22' }}
                />
              </div>

              {/* Date Box — Interactive Calendar */}
              <div className="relative" ref={calendarRef}>
                <div 
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="flex items-center gap-2.5 px-3 cursor-pointer select-none"
                  style={{
                    width: '292.29px',
                    height: '52px',
                    backgroundColor: '#E9E9E9',
                    border: showCalendar ? '1.5px solid #005CBD' : '1px solid #6B7FC6',
                    borderRadius: '8px',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke={showCalendar ? '#005CBD' : '#727784'} strokeWidth="2" viewBox="0 0 24 24" style={{ transition: 'stroke 0.2s ease' }}>
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span className="text-[15px] font-medium whitespace-nowrap" style={{ color: '#191C22' }}>
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "MMM dd")} – {format(date.to, "MMM dd, yyyy")}
                        </>
                      ) : (
                        format(date.from, "MMM dd, yyyy")
                      )
                    ) : (
                      "Oct 12 – Oct 18, 2026"
                    )}
                  </span>
                </div>

                {/* Calendar Popover */}
                <AnimatePresence>
                  {showCalendar && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-2 z-[9999] bg-white border border-gray-200 rounded-2xl overflow-hidden"
                      style={{ boxShadow: '0 25px 60px -12px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.05)' }}
                    >
                      <Calendar
                        mode="range"
                        captionLayout="dropdown"
                        startMonth={new Date(2020, 0)}
                        endMonth={new Date(2035, 11)}
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={(newRange) => {
                          setDate(newRange)
                          if (newRange?.from && newRange?.to) {
                            setTimeout(() => setShowCalendar(false), 400)
                          }
                        }}
                        numberOfMonths={1}
                      />
                      {/* Selection feedback */}
                      <div style={{
                        borderTop: '1px solid #e5e7eb',
                        padding: '8px 16px',
                        fontSize: '12px',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        color: '#727784',
                        textAlign: 'center',
                      }}>
                        {date?.from && date?.to ? (
                          <span style={{ color: '#005CBD', fontWeight: 600 }}>
                            ✓ {format(date.from, "MMM dd, yyyy")} → {format(date.to, "MMM dd, yyyy")}
                          </span>
                        ) : date?.from ? (
                          <span>Select end date...</span>
                        ) : (
                          <span>Select start date</span>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Search Button (Image 4) */}
              <motion.button
                onClick={() => navigate('/search')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 text-white transition-opacity hover:opacity-90 flex-shrink-0"
                style={{ 
                  width: '151.42px',
                  height: '52px',
                  backgroundColor: '#005CBD',
                  borderRadius: '8px',
                  padding: '12px 32px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '15px',
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                Search
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES SECTION ── */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Best Price Guarantee */}
          <div className="rounded-2xl p-6 flex flex-col items-center text-center" style={{ backgroundColor: '#E9E9E9' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: '#5392F933' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tag-icon lucide-tag w-6 h-6 text-[#005CBD]"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>
            </div>
            <h3 className="text-gray-900" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '28px',
              letterSpacing: '0px',
              textAlign: 'center',
            }}>Best Price Guarantee</h3>
            <p className="mt-1" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#424753',
            }}>
              Find a lower price? We'll match it and give you a voucher for your next trip.
            </p>
          </div>

          {/* 24/7 Global Support */}
          <div className="rounded-2xl p-6 flex flex-col items-center text-center" style={{ backgroundColor: '#E9E9E9' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: '#FF567D33' }}>
              <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M11.25 22.5V20H21.25V11.125C21.25 8.6875 20.401 6.61979 18.7031 4.92188C17.0052 3.22396 14.9375 2.375 12.5 2.375C10.0625 2.375 7.99479 3.22396 6.29688 4.92188C4.59896 6.61979 3.75 8.6875 3.75 11.125V18.75H2.5C1.8125 18.75 1.22396 18.5052 0.734375 18.0156C0.244792 17.526 0 16.9375 0 16.25V13.75C0 13.3125 0.109375 12.901 0.328125 12.5156C0.546875 12.1302 0.854167 11.8229 1.25 11.5938L1.34375 9.9375C1.51042 8.52083 1.92188 7.20833 2.57812 6C3.23438 4.79167 4.05729 3.73958 5.04688 2.84375C6.03646 1.94792 7.17188 1.25 8.45312 0.75C9.73438 0.25 11.0833 0 12.5 0C13.9167 0 15.2604 0.25 16.5312 0.75C17.8021 1.25 18.9375 1.94271 19.9375 2.82812C20.9375 3.71354 21.7604 4.76042 22.4062 5.96875C23.0521 7.17708 23.4688 8.48958 23.6562 9.90625L23.75 11.5312C24.1458 11.7188 24.4531 12 24.6719 12.375C24.8906 12.75 25 13.1458 25 13.5625V16.4375C25 16.8542 24.8906 17.25 24.6719 17.625C24.4531 18 24.1458 18.2812 23.75 18.4688V20C23.75 20.6875 23.5052 21.276 23.0156 21.7656C22.526 22.2552 21.9375 22.5 21.25 22.5H11.25ZM8.75 13.75C8.39583 13.75 8.09896 13.6302 7.85938 13.3906C7.61979 13.151 7.5 12.8542 7.5 12.5C7.5 12.1458 7.61979 11.849 7.85938 11.6094C8.09896 11.3698 8.39583 11.25 8.75 11.25C9.10417 11.25 9.40104 11.3698 9.64062 11.6094C9.88021 11.849 10 12.1458 10 12.5C10 12.8542 9.88021 13.151 9.64062 13.3906C9.40104 13.6302 9.10417 13.75 8.75 13.75ZM16.25 13.75C15.8958 13.75 15.599 13.6302 15.3594 13.3906C15.1198 13.151 15 12.8542 15 12.5C15 12.1458 15.1198 11.849 15.3594 11.6094C15.599 11.3698 15.8958 11.25 16.25 11.25C16.6042 11.25 16.901 11.3698 17.1406 11.6094C17.3802 11.849 17.5 12.1458 17.5 12.5C17.5 12.8542 17.3802 13.151 17.1406 13.3906C16.901 13.6302 16.6042 13.75 16.25 13.75ZM5.03125 11.8125C4.88542 9.60417 5.55208 7.70833 7.03125 6.125C8.51042 4.54167 10.3542 3.75 12.5625 3.75C14.4167 3.75 16.0469 4.33854 17.4531 5.51562C18.8594 6.69271 19.7083 8.19792 20 10.0312C18.1042 10.0104 16.3594 9.5 14.7656 8.5C13.1719 7.5 11.9479 6.14583 11.0938 4.4375C10.7604 6.10417 10.0573 7.58854 8.98438 8.89062C7.91146 10.1927 6.59375 11.1667 5.03125 11.8125Z" fill="#C8185A"/>
              </svg>
            </div>
            <h3 className="text-gray-900" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '28px',
              letterSpacing: '0px',
              textAlign: 'center',
            }}>24/7 Global Support</h3>
            <p className="mt-1" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#424753',
            }}>
              Our world-class support team is here to help you anywhere, anytime in 40+ languages.
            </p>
          </div>

          {/* Flexible Booking */}
          <div className="rounded-2xl p-6 flex flex-col items-center text-center" style={{ backgroundColor: '#E9E9E9' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: '#D47F0033' }}>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M17.5 25V21.25H13.75V18.75H17.5V15H20V18.75H23.75V21.25H20V25H17.5ZM2.5 22.5C1.8125 22.5 1.22396 22.2552 0.734375 21.7656C0.244792 21.276 0 20.6875 0 20V5C0 4.3125 0.244792 3.72396 0.734375 3.23438C1.22396 2.74479 1.8125 2.5 2.5 2.5H3.75V0H6.25V2.5H13.75V0H16.25V2.5H17.5C18.1875 2.5 18.776 2.74479 19.2656 3.23438C19.7552 3.72396 20 4.3125 20 5V12.625C19.5833 12.5625 19.1667 12.5312 18.75 12.5312C18.3333 12.5312 17.9167 12.5625 17.5 12.625V10H2.5V20H11.25C11.25 20.4167 11.2812 20.8333 11.3438 21.25C11.4062 21.6667 11.5208 22.0833 11.6875 22.5H2.5ZM2.5 7.5H17.5V5H2.5V7.5ZM2.5 7.5V5V7.5Z" fill="#8A5100"/>
              </svg>
            </div>
            <h3 className="text-gray-900" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '28px',
              letterSpacing: '0px',
              textAlign: 'center',
            }}>Flexible Booking</h3>
            <p className="mt-1" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#424753',
            }}>
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
              <h2 className="text-gray-900" style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: '30px',
                lineHeight: '36px',
                letterSpacing: '0px',
              }}>Trending Destinations</h2>
              <p className="text-gray-500 mt-1" style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0px',
              }}>Handpicked favorites for your next adventure</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#005CBD] hover:underline"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0px',
              }}
            >
              View all
            </motion.button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => navigate('/search')}
                className="cursor-pointer group"
              >
                {/* Image with rounded corners */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src={dest.img}
                    alt={dest.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {dest.badge && (
                    <span className="absolute bottom-3 left-3 text-xs font-bold text-gray-900 bg-white px-3 py-1 rounded-full shadow-sm tracking-wide uppercase">
                      {dest.badge}
                    </span>
                  )}
                </div>
                {/* Info — no card bg, text sits below image */}
                <div className="pt-3 pb-1">
                  <p className="text-gray-900" style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '28px',
                    letterSpacing: '0px',
                  }}>{dest.city}</p>
                  <p className="text-gray-500 mt-1" style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0px',
                  }}>
                    Starting from <span style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0px',
                      color: 'var(--color-primary)',
                    }}>{dest.price}</span>
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
            className="relative overflow-hidden flex flex-row items-center justify-between"
            style={{
              backgroundColor: '#B61B4A',
              borderRadius: '24px',
              height: '416px',
              paddingTop: '39.85px',
              paddingRight: '39.85px',
              paddingBottom: '39.84px',
              paddingLeft: '48px',
            }}
          >
            {/* Decorative tag SVG — #191C22, 20% opacity, at the top */}
            <div
              className="absolute pointer-events-none select-none"
              style={{ right: '320px', top: '0px', opacity: 0.20 }}
            >
              <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M242.5 153.125L153.125 242.5C150.625 245 147.812 246.875 144.688 248.125C141.562 249.375 138.438 250 135.312 250C132.188 250 129.062 249.375 125.938 248.125C122.812 246.875 120 245 117.5 242.5L7.1875 132.188C4.89583 129.896 3.125 127.24 1.875 124.219C0.625 121.198 0 118.021 0 114.688V25C0 18.125 2.44792 12.2396 7.34375 7.34375C12.2396 2.44792 18.125 0 25 0H114.688C118.021 0 121.25 0.677083 124.375 2.03125C127.5 3.38542 130.208 5.20833 132.5 7.5L242.5 117.812C245 120.312 246.823 123.125 247.969 126.25C249.115 129.375 249.688 132.5 249.688 135.625C249.688 138.75 249.115 141.823 247.969 144.844C246.823 147.865 245 150.625 242.5 153.125ZM56.25 75C61.4583 75 65.8854 73.1771 69.5312 69.5312C73.1771 65.8854 75 61.4583 75 56.25C75 51.0417 73.1771 46.6146 69.5312 42.9688C65.8854 39.3229 61.4583 37.5 56.25 37.5C51.0417 37.5 46.6146 39.3229 42.9688 42.9688C39.3229 46.6146 37.5 51.0417 37.5 56.25C37.5 61.4583 39.3229 65.8854 42.9688 69.5312C46.6146 73.1771 51.0417 75 56.25 75ZM137.5 193.75L181.25 150C183.542 147.708 185.365 145 186.719 141.875C188.073 138.75 188.75 135.417 188.75 131.875C188.75 124.792 186.25 118.75 181.25 113.75C176.25 108.75 170.208 106.25 163.125 106.25C159.167 106.25 155.26 107.396 151.406 109.688C147.552 111.979 142.917 115.833 137.5 121.25C131.25 115.417 126.354 111.458 122.812 109.375C119.271 107.292 115.625 106.25 111.875 106.25C104.792 106.25 98.75 108.75 93.75 113.75C88.75 118.75 86.25 124.792 86.25 131.875C86.25 135.417 86.9271 138.75 88.2812 141.875C89.6354 145 91.4583 147.708 93.75 150L137.5 193.75Z" fill="#191C22"/>
              </svg>
            </div>

            {/* Text */}
            <div className="relative z-10 text-white flex-1 max-w-[500px]">
              <h2 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 900,
                fontSize: '48px',
                lineHeight: '48px',
                letterSpacing: '0px',
              }}>
                Summer Sales: Up to 40% Off!
              </h2>
              <p className="mt-4 text-white/90" style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '28px',
                letterSpacing: '0px',
              }}>
                Exclusive member deals on flights and luxury hotels for your next summer getaway. Valid until Oct 31st.
              </p>
              <div className="flex flex-row gap-3 mt-8">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl bg-white hover:bg-gray-50 transition-colors" 
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '28px',
                    letterSpacing: '0px',
                    color: '#B61B4A',
                  }}
                >
                  Explore Deals
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-xl border-2 border-white text-white hover:bg-white/10 transition-colors" 
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '28px',
                    letterSpacing: '0px',
                  }}
                >
                  Join Club T-Goda
                </motion.button>
              </div>
            </div>

            {/* Image — zoomed and cropped to hide white corners in the source file */}
            <div
              className="flex-shrink-0 overflow-hidden rotate-[3deg]"
              style={{ 
                width: '336px', 
                height: '336px',
                borderRadius: '24px'
              }}
            >
              <img
                src={poolImg}
                alt="Luxury pool"
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── GET TRAVEL DEALS DIRECTLY ── */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden py-12 px-4" style={{ backgroundColor: '#E7E8F1' }}>
          {/* Mail icon — exact SVG provided by user */}
          <div className="flex justify-center mb-4">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 32C2.9 32 1.95833 31.6083 1.175 30.825C0.391667 30.0417 0 29.1 0 28V4C0 2.9 0.391667 1.95833 1.175 1.175C1.95833 0.391667 2.9 0 4 0H36C37.1 0 38.0417 0.391667 38.825 1.175C39.6083 1.95833 40 2.9 40 4V28C40 29.1 39.6083 30.0417 38.825 30.825C38.0417 31.6083 37.1 32 36 32H4ZM20 18L4 8V28H36V8L20 18ZM20 14L36 4H4L20 14Z" fill="#005CBD"/>
            </svg>
          </div>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: '30px',
            lineHeight: '36px',
            letterSpacing: '0px',
            textAlign: 'center',
            color: '#111827',
          }}>Get Travel Deals Directly</h2>
          <p className="mt-3 mx-auto" style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '28px',
            letterSpacing: '0px',
            textAlign: 'center',
            color: '#4B5563',
            width: '661.67px',
            height: '56px',
          }}>
            Subscribe to our newsletter and get early access to hidden gems and seasonal discounts. No spam, only adventure.
          </p>
          <div className="mt-8 flex flex-row items-center justify-center gap-4 mx-auto">
            {/* Email Bar Box (Image 1) */}
            <div 
              style={{ 
                width: '477.78px',
                height: '58px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #6B7FC6',
                borderRadius: '12px',
                padding: '17px 24px 18px 24px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full outline-none bg-transparent"
                style={{ 
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '16px',
                  lineHeight: '100%',
                  fontWeight: 400,
                  color: '#191C22'
                }}
              />
            </div>
            {/* Subscribe Button Box (Image 2) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white transition-opacity hover:opacity-90 flex items-center justify-center"
              style={{ 
                backgroundColor: '#005CBD',
                borderRadius: '12px',
                width: '182.22px',
                height: '58px',
                padding: '16.5px 32px 17.5px 32px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '24px',
              }}
            >
              Subscribe Now
            </motion.button>
          </div>
          <p className="mt-4 mx-auto whitespace-nowrap" style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
            letterSpacing: '0px',
            textAlign: 'center',
            color: '#424753',
          }}>
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}