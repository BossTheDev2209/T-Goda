import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-black text-[#1A1A2E] mb-6">T-Goda</h2>
            <p className="text-[13px] font-bold text-[#94A3B8] leading-relaxed max-w-[280px]">
              Making world travel accessible, affordable, and delightful for everyone since 2024. Your journey starts here.
            </p>
          </div>

          {/* Company */}
          <div className="md:ml-auto">
            <h3 className="text-[13px] font-black text-[#1A1A2E] uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-[13px] font-bold text-[#94A3B8] hover:text-[#005CBD] transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-[13px] font-bold text-[#94A3B8] hover:text-[#005CBD] transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:ml-auto">
            <h3 className="text-[13px] font-black text-[#1A1A2E] uppercase tracking-wider mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-[13px] font-bold text-[#94A3B8] hover:text-[#005CBD] transition-colors">Support</Link></li>
              <li><Link to="#" className="text-[13px] font-bold text-[#94A3B8] hover:text-[#005CBD] transition-colors">Mobile App</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:ml-auto">
            <h3 className="text-[13px] font-black text-[#1A1A2E] uppercase tracking-wider mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-[13px] font-bold text-[#94A3B8] hover:text-[#005CBD] transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-[13px] font-bold text-[#94A3B8] hover:text-[#005CBD] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-50">
          <div className="flex flex-col items-start gap-4">
            <p className="text-[13px] font-bold text-[#94A3B8]">
              &copy; 2024 T-Goda Booking. All rights reserved.
            </p>
            
            {/* Social Icons - Bottom Left as per mockup */}
            <div className="flex items-center gap-4">
              <Link to="#" className="text-[#CBD5E1] hover:text-[#1A1A2E] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </Link>
              <Link to="#" className="text-[#CBD5E1] hover:text-[#1A1A2E] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </Link>
              <Link to="#" className="text-[#CBD5E1] hover:text-[#1A1A2E] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
