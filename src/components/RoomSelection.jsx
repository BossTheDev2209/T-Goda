import { motion } from 'framer-motion';

const PersonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM0 16V13.2C0 12.6333 0.145833 12.1125 0.4375 11.6375C0.729167 11.1625 1.11667 10.8 1.6 10.55C2.63333 10.0333 3.68333 9.64583 4.75 9.3875C5.81667 9.12917 6.9 9 8 9C9.1 9 10.1833 9.12917 11.25 9.3875C12.3167 9.64583 13.3667 10.0333 14.4 10.55C14.8833 10.8 15.2708 11.1625 15.5625 11.6375C15.8542 12.1125 16 12.6333 16 13.2V16H0ZM2 14H14V13.2C14 13.0167 13.9542 12.85 13.8625 12.7C13.7708 12.55 13.65 12.4333 13.5 12.35C12.6 11.9 11.6917 11.5625 10.775 11.3375C9.85833 11.1125 8.93333 11 8 11C7.06667 11 6.14167 11.1125 5.225 11.3375C4.30833 11.5625 3.4 11.9 2.5 12.35C2.35 12.4333 2.22917 12.55 2.1375 12.7C2.04583 12.85 2 13.0167 2 13.2V14ZM8 6C8.55 6 9.02083 5.80417 9.4125 5.4125C9.80417 5.02083 10 4.55 10 4C10 3.45 9.80417 2.97917 9.4125 2.5875C9.02083 2.19583 8.55 2 8 2C7.45 2 6.97917 2.19583 6.5875 2.5875C6.19583 2.97917 6 3.45 6 4C6 4.55 6.19583 5.02083 6.5875 5.4125C6.97917 5.80417 7.45 6 8 6Z" fill="#191C22"/>
  </svg>
)

const ChildIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 8.75C11.15 8.75 10.8542 8.62917 10.6125 8.3875C10.3708 8.14583 10.25 7.85 10.25 7.5C10.25 7.15 10.3708 6.85417 10.6125 6.6125C10.8542 6.37083 11.15 6.25 11.5 6.25C11.85 6.25 12.1458 6.37083 12.3875 6.6125C12.6292 6.85417 12.75 7.15 12.75 7.5C12.75 7.85 12.6292 8.14583 12.3875 8.3875C12.1458 8.62917 11.85 8.75 11.5 8.75ZM6.5 8.75C6.15 8.75 5.85417 8.62917 5.6125 8.3875C5.37083 8.14583 5.25 7.85 5.25 7.5C5.25 7.15 5.37083 6.85417 5.6125 6.6125C5.85417 6.37083 6.15 6.25 6.5 6.25C6.85 6.25 7.14583 6.37083 7.3875 6.6125C7.62917 6.85417 7.75 7.15 7.75 7.5C7.75 7.85 7.62917 8.14583 7.3875 8.3875C7.14583 8.62917 6.85 8.75 6.5 8.75ZM9 14C8 14 7.09583 13.725 6.2875 13.175C5.47917 12.625 4.88333 11.9 4.5 11H13.5C13.1167 11.9 12.5208 12.625 11.7125 13.175C10.9042 13.725 10 14 9 14ZM9 18C7.75 18 6.57917 17.7625 5.4875 17.2875C4.39583 16.8125 3.44583 16.1708 2.6375 15.3625C1.82917 14.5542 1.1875 13.6042 0.7125 12.5125C0.2375 11.4208 0 10.25 0 9C0 7.75 0.2375 6.57917 0.7125 5.4875C1.1875 4.39583 1.82917 3.44583 2.6375 2.6375C3.44583 1.82917 4.39583 1.1875 5.4875 0.7125C6.57917 0.2375 7.75 0 9 0C10.25 0 11.4208 0.2375 12.5125 0.7125C13.6042 1.1875 14.5542 1.82917 15.3625 2.6375C16.1708 3.44583 16.8125 4.39583 17.2875 5.4875C17.7625 6.57917 18 7.75 18 9C18 10.25 17.7625 11.4208 17.2875 12.5125C16.8125 13.6042 16.1708 14.5542 15.3625 15.3625C14.5542 16.1708 13.6042 16.8125 12.5125 17.2875C11.4208 17.7625 10.25 18 9 18ZM9 16C10.9333 16 12.5833 15.3167 13.95 13.95C15.3167 12.5833 16 10.9333 16 9C16 7.06667 15.3167 5.41667 13.95 4.05C12.5833 2.68333 10.9333 2 9 2C8.9 2 8.8 2 8.7 2C8.6 2 8.5 2.01667 8.4 2.05C8.3 2.15 8.23333 2.25833 8.2 2.375C8.16667 2.49167 8.15 2.61667 8.15 2.75C8.15 3.1 8.27083 3.39583 8.5125 3.6375C8.75417 3.87917 9.05 4 9.4 4C9.55 4 9.6875 3.975 9.8125 3.925C9.9375 3.875 10.0667 3.85 10.2 3.85C10.4 3.85 10.5667 3.925 10.7 4.075C10.8333 4.225 10.9 4.4 10.9 4.6C10.9 4.98333 10.7208 5.22917 10.3625 5.3375C10.0042 5.44583 9.68333 5.5 9.4 5.5C8.65 5.5 8.00417 5.22917 7.4625 4.6875C6.92083 4.14583 6.65 3.5 6.65 2.75C6.65 2.7 6.65 2.65 6.65 2.6C6.65 2.55 6.65833 2.48333 6.675 2.4C5.29167 2.9 4.16667 3.74167 3.3 4.925C2.43333 6.10833 2 7.46667 2 9C2 10.9333 2.68333 12.5833 4.05 13.95C5.41667 15.3167 7.06667 16 9 16Z" fill="#191C22"/>
  </svg>
)

const CheckIcon = () => (
  <svg className="w-4 h-4 text-[#16A34A] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

const InfoIcon = () => (
  <svg className="w-4 h-4 text-[#2563EB]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
)

const rooms = [
  {
    type: 'Presidential Sea Front Suite',
    badge: 'LIMITED TIME OFFER',
    details: '85m² • Panoramic Sea View • Infinity Pool Access',
    sleeps: { adults: 4, children: 0 },
    originalPrice: 1295,
    price: 862,
    priceColor: 'text-[#B61B4A]',
    options: ['Free Airport Transfer', 'All-Inclusive Premium'],
    urgency: 'Only 1 room left!',
    buttonColor: 'bg-[#B61B4A]',
    highlight: true,
  },
  {
    type: 'Deluxe Garden View Room',
    details: '32m² • Balcony • Garden View • 1 King Bed',
    sleeps: { adults: 2, children: 0 },
    originalPrice: 345,
    price: 264,
    priceColor: 'text-[#191C22]',
    options: ['Free Cancellation', 'Breakfast Included'],
    buttonColor: 'bg-[#2563EB]',
    highlight: false,
  },
  {
    type: 'Junior Suite with Private Pool',
    details: '45m² • Private Pool • Sea View • King Bed',
    sleeps: { adults: 2, children: 1 },
    originalPrice: 626,
    price: 445,
    priceColor: 'text-[#191C22]',
    options: ['Free Cancellation', 'All-Inclusive'],
    urgency: 'Only 2 rooms left!',
    buttonColor: 'bg-[#2563EB]',
    highlight: false,
  },
]

export default function RoomSelection() {
  return (
    <div>
      <h2 className="text-lg font-bold text-[#191C22] mb-4">Select Your Room</h2>

      <div className="rounded-2xl border border-gray-200 bg-[#F8FAFC] overflow-hidden">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 p-4 text-sm font-bold text-[#191C22] border-b border-gray-200">
          <div className="col-span-5">Room Type</div>
          <div className="col-span-2">Sleeps</div>
          <div className="col-span-2">Today's Price</div>
          <div className="col-span-3">Options</div>
        </div>

        {/* Room Rows */}
        {rooms.map((room, i) => (
          <div
            key={i}
            className={`bg-white border-b border-gray-100 last:border-b-0 ${
              room.highlight ? 'border-l-4 border-l-[#2563EB]' : ''
            }`}
          >
            {/* Mobile (Flex Stack) + Desktop (Grid) Wrapper */}
            <div className="flex flex-col gap-3 p-4 md:grid md:grid-cols-12 md:items-center md:gap-4 md:p-4">
              
              {/* Room Type */}
              <div className="md:col-span-5">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-sm font-semibold text-[#191C22]">{room.type}</span>
                  {room.badge && (
                    <span className="bg-[#B61B4A] text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                      {room.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#64748B] mb-2">{room.details}</p>
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }} 
                  whileTap={{ scale: 0.98 }} 
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex items-center gap-1 text-sm font-semibold text-[#2563EB] hover:underline"
                >
                  <InfoIcon />
                  Room details
                </motion.button>
              </div>

              {/* Sleeps */}
              <div className="md:col-span-2 flex items-center gap-0.5 pt-1 md:pt-0">
                {[...Array(room.sleeps.adults)].map((_, j) => (
                  <PersonIcon key={j} />
                ))}
                {[...Array(room.sleeps.children)].map((_, j) => (
                  <ChildIcon key={j} />
                ))}
              </div>

              {/* Price */}
              <div className="md:col-span-2">
                <p className="text-sm text-[#64748B] line-through">${room.originalPrice}</p>
                <p className={`text-2xl font-bold ${room.priceColor}`}>${room.price}</p>
                <p className="text-xs text-[#64748B]">Includes taxes &amp; fees</p>
              </div>

              {/* Options */}
              <div className="md:col-span-3 flex flex-col gap-1.5">
                {room.options.map((opt) => (
                  <div key={opt} className="flex items-center gap-1.5">
                    <CheckIcon />
                    <span className="text-sm text-[#16A34A]">{opt}</span>
                  </div>
                ))}
                {room.urgency && (
                  <p className="text-sm font-bold text-[#B61B4A] mt-1">{room.urgency}</p>
                )}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }} 
                  whileTap={{ scale: 0.98 }} 
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={`${room.buttonColor} text-white px-6 py-2 rounded-lg font-semibold text-sm w-full mt-3 md:w-auto md:mt-2 md:self-end hover:brightness-110 transition-all`}
                >
                  Select
                </motion.button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
