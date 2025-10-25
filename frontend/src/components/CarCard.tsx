
import React, { useState } from 'react';
import { Car } from '../data/mockData';
import {Users, Luggage, Settings, ShoppingCart} from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [days, setDays] = useState(7);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      type: 'car',
      item: car,
      quantity: 1,
      days: days
    });
    toast.success(`${car.brand} ${car.model} adicionado ao carrinho!`, {
      icon: '🚗',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const totalPrice = car.price * days;
  const installmentPrice = totalPrice / 12;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
      <div className="relative">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-1">{car.brand} {car.model}</h3>
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
            {car.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{car.passengers} pessoas</span>
            </div>
            <div className="flex items-center space-x-1">
              <Luggage className="h-4 w-4" />
              <span>{car.luggage} malas</span>
            </div>
            <div className="flex items-center space-x-1">
              <Settings className="h-4 w-4" />
              <span>{car.transmission}</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-gray-800">Recursos inclusos:</h4>
          <div className="space-y-2">
            {car.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Número de dias:
          </label>
          <select
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(day => (
              <option key={day} value={day}>{day} dia{day > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <div className="text-3xl font-bold text-green-600 mb-1">
            R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className="text-blue-600 font-semibold mb-1">
            12x de R$ {installmentPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <p className="text-sm text-gray-500">
            sem juros no cartão • R$ {car.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/dia × {days} dia{days > 1 ? 's' : ''}
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

export default CarCard;
