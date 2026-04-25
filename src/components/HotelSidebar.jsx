import mapImg from '../assets/maps.png';

export default function HotelSidebar() {
  const scores = [
    { label: 'Cleanliness', score: 9.5, width: 'w-[95%]' },
    { label: 'Service', score: 9.2, width: 'w-[92%]' },
    { label: 'Location', score: 8.9, width: 'w-[89%]' },
  ]

  return (
    <div className="flex flex-col gap-6">
      {/* Review Score Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-lg font-bold text-[#191C22]">Excellent</p>
            <p className="text-sm text-[#64748B]">1,248 verified reviews</p>
          </div>
          <div className="bg-[#2563EB] text-white rounded-xl w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
            9.2
          </div>
        </div>

        <div className="space-y-4">
          {scores.map((s) => (
            <div key={s.label}>
              <div className="flex justify-between mb-1.5">
                <span className="text-sm text-[#191C22]">{s.label}</span>
                <span className="text-sm font-semibold text-[#191C22]">{s.score}</span>
              </div>
              <div className="h-1.5 w-full bg-gray-200 rounded-full">
                <div className={`h-full bg-[#2563EB] rounded-full ${s.width}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Card */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <img
          src={mapImg}
          alt="Map location"
          className="w-full h-32 object-cover bg-gray-100"
          onError={(e) => {
            e.target.style.background = '#e5e7eb'
            e.target.alt = 'Map placeholder'
          }}
        />
        <div className="p-4">
          <p className="text-sm font-semibold text-[#191C22] mb-1">Near Spinalonga Island</p>
          <p className="text-sm text-[#64748B]">15 min walk to city center</p>
        </div>
      </div>
    </div>
  )
}
