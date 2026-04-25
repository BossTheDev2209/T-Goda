import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold text-blue-600">T-Goda</span>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Unlock exclusive prices on over 2 million properties and flights across the globe.
            </p>
            {/* Social icons */}
            <div className="flex gap-2 mt-4">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-blue-500 hover:text-blue-600 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-pink-500 hover:text-pink-500 transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" aria-label="X" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-800 hover:text-gray-800 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">About Us</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Careers</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Press</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Support</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Help Center</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Support</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Mobile App</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-gray-900">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs text-gray-400 text-center">
            &copy; 2024 T-Goda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
