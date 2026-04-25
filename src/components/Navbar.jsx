import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-tight" style={{ color: 'var(--color-primary)' }}>T-Goda</span>
          </Link>

          {/* Nav Links - hidden on mobile */}
          <div className="hidden md:flex items-center gap-6 ml-10">
            <Link
              to="/search"
              className="text-sm font-medium border-b-2 pb-0.5"
              style={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}
            >
              Hotels
            </Link>
            <Link to="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Flights
            </Link>
            <Link to="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Bundles
            </Link>
            <Link to="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Activities
            </Link>
          </div>

          {/* Mobile menu spacer */}
          <div className="flex-1 md:hidden" />

          {/* Auth buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
              Sign In
            </button>
            <button
              onClick={() => navigate('/search')}
              className="text-sm font-semibold text-white px-4 py-2 rounded-lg"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
