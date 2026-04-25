import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HotelDetailPage from './pages/RoomDetailPage'
import SearchResultsPage from './pages/SearchResultsPage'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/hotel/:id" element={<HotelDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}
