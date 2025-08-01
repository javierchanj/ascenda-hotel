import { Routes, Route } from 'react-router-dom'
import HotelSearchPage from './pages/HotelSearchPage'
import DestinationSearchPage from './pages/DestinationSearchPage'
import './styles/hotelSearch.css'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DestinationSearchPage />} />
      <Route
            path="/HotelSearchPage"
            element={<HotelSearchPage />}
            />
    </Routes>
  )
}