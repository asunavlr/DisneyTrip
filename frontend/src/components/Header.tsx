
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {ShoppingCart, Castle} from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const location = useLocation();
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform">
            <div className="bg-white rounded-full p-2">
              <Castle className="h-8 w-8 text-purple-600" />
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold">Disney Travel</h1>
              <p className="text-sm text-purple-200">Pacotes Mágicos</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-white hover:text-yellow-300 transition-colors font-medium ${
                isActive('/') ? 'text-yellow-300 border-b-2 border-yellow-300' : ''
              }`}
            >
              Início
            </Link>
            <Link
              to="/packages"
              className={`text-white hover:text-yellow-300 transition-colors font-medium ${
                isActive('/packages') ? 'text-yellow-300 border-b-2 border-yellow-300' : ''
              }`}
            >
              Pacotes
            </Link>
            <Link
              to="/accommodations"
              className={`text-white hover:text-yellow-300 transition-colors font-medium ${
                isActive('/accommodations') ? 'text-yellow-300 border-b-2 border-yellow-300' : ''
              }`}
            >
              Hospedagem
            </Link>
            <Link
              to="/cars"
              className={`text-white hover:text-yellow-300 transition-colors font-medium ${
                isActive('/cars') ? 'text-yellow-300 border-b-2 border-yellow-300' : ''
              }`}
            >
              Carros
            </Link>
            <Link
              to="/tickets"
              className={`text-white hover:text-yellow-300 transition-colors font-medium ${
                isActive('/tickets') ? 'text-yellow-300 border-b-2 border-yellow-300' : ''
              }`}
            >
              Ingressos
            </Link>
          </nav>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative bg-yellow-500 hover:bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-semibold transition-all hover:scale-105 flex items-center space-x-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Carrinho</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 flex flex-wrap gap-4">
          <Link
            to="/"
            className={`text-white hover:text-yellow-300 transition-colors text-sm ${
              isActive('/') ? 'text-yellow-300' : ''
            }`}
          >
            Início
          </Link>
          <Link
            to="/packages"
            className={`text-white hover:text-yellow-300 transition-colors text-sm ${
              isActive('/packages') ? 'text-yellow-300' : ''
            }`}
          >
            Pacotes
          </Link>
          <Link
            to="/accommodations"
            className={`text-white hover:text-yellow-300 transition-colors text-sm ${
              isActive('/accommodations') ? 'text-yellow-300' : ''
            }`}
          >
            Hospedagem
          </Link>
          <Link
            to="/cars"
            className={`text-white hover:text-yellow-300 transition-colors text-sm ${
              isActive('/cars') ? 'text-yellow-300' : ''
            }`}
          >
            Carros
          </Link>
          <Link
            to="/tickets"
            className={`text-white hover:text-yellow-300 transition-colors text-sm ${
              isActive('/tickets') ? 'text-yellow-300' : ''
            }`}
          >
            Ingressos
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
