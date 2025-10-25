
import React, { useState } from 'react';
import { Accommodation } from '../data/mockData';
import {Star, Users, Bed, Bath, MapPin, Wifi, Car, ShoppingCart} from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

interface AccommodationCardProps {
  accommodation: Accommodation;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ accommodation }) => {
  const [nights, setNights] = useState(3);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      type: 'accommodation',
      item: accommodation,
      quantity: 1,
      nights: nights
    });
    toast.success(`${accommodation.name} adicionado ao carrinho!`, {
      icon: '🏠',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const totalPrice = accommodation.price * nights;
  const installmentPrice = totalPrice / 12;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
      <div className="relative">
        <img
          src={accommodation.image}
          alt={accommodation.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-1">{accommodation.name}</h3>
          <div className="flex items-center space-x-1 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{accommodation.location}</span>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="font-semibold text-sm">{accommodation.rating}</span>
            <span className="text-xs text-gray-600">({accommodation.reviews})</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-semibold text-purple-600">{accommodation.type}</span>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Bed className="h-4 w-4" />
              <span>{accommodation.bedrooms}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bath className="h-4 w-4" />
              <span>{accommodation.bathrooms}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{accommodation.maxGuests}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">{accommodation.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-gray-800">Comodidades:</h4>
          <div className="flex flex-wrap gap-2">
            {accommodation.amenities.slice(0, 4).map((amenity, index) => (
              <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                {amenity}
              </span>
            ))}
            {accommodation.amenities.length > 4 && (
              <span className="text-purple-600 text-xs font-medium">
                +{accommodation.amenities.length - 4} mais
              </span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Número de noites:
          </label>
          <select
            value={nights}
            onChange={(e) => setNights(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(night => (
              <option key={night} value={night}>{night} noite{night > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <div className="text-3xl font-bold text-green-600 mb-1">
            R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <div className="text-blue-600 font-semibold mb-1">
            12x de R$ {installmentPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <p className="text-sm text-gray-500">
            sem juros no cartão • R$ {accommodation.price}/noite × {nights} noite{nights > 1 ? 's' : ''}
          </p>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Adicionar ao Carrinho</span>
        </button>
      </div>
    </div>
  );
};

export default AccommodationCard;
