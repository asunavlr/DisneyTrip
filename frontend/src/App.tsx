
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import Packages from './pages/Packages';
import PackageDetails from './pages/PackagesDetails';
import PurchaseSummary from './pages/PurchaseSummary';
import Accommodations from './pages/Accomodations';
import Cars from './pages/Cars';
import Tickets from './pages/Tickets';
import Cart from './pages/Cart';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/package/:id" element={<PackageDetails />} />
              <Route path="/purchase-summary" element={<PurchaseSummary />} />
              <Route path="/accommodations" element={<Accommodations />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Toaster position="top-right" />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
