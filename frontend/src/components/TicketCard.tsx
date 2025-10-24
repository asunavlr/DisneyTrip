
import React from 'react';
import { Ticket } from '../data/mockData';
import {Clock, Star, ShoppingCart} from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      type: 'ticket',
      item: ticket,
      quantity: 1
    });
    toast.success(`Ingresso ${ticket.park} adicionado ao carrinho!`, {
      icon: '🎫',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
      <div className="relative">
        <img
          src={ticket.image}
          alt={ticket.park}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-1">{ticket.park}</h3>
          <div className="flex items-center space-x-1 text-sm">
            <Clock className="h-4 w-4" />
            <span>{ticket.duration}</span>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-yellow-500 text-purple-900 px-3 py-1 rounded-full text-sm font-bold">
          {ticket.type}
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed">{ticket.description}</p>

        <div className="mb-6">
          <h4 className="font-semibold mb-3 text-gray-800 flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span>Recursos inclusos:</span>
          </h4>
          <div className="space-y-2">
            {ticket.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 text-sm text-gray-700">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-3xl font-bold text-green-600">
              ${ticket.price.toLocaleString()}
            </div>
            <p className="text-sm text-gray-500">por pessoa</p>
          </div>
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

export default TicketCard;
