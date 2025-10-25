
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package } from '../data/mockData';
import {Calendar, Users, Car, Ticket, ShoppingCart, Eye} from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

interface PackageCardProps {
  package: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg }) => {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addItem({
      type: 'package',
      item: pkg,
      quantity: 1
    });
    toast.success(`${pkg.name} adicionado ao carrinho!`, {
      icon: '🎉',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const handleViewDetails = () => {
    navigate(`/package/${pkg.id}`);
  };

  // Calcular preço parcelado
  const installmentPrice = pkg.discountPrice / 12;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
      <div className="relative">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {pkg.discount > 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{pkg.discount}%
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
          <div className="flex items-center space-x-1 text-sm">
            <Calendar className="h-4 w-4" />
            <span>{pkg.duration}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed">{pkg.description}</p>

        <div className="space-y-3 mb-6">
          {pkg.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center space-x-3 text-sm text-gray-700">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <div className="mb-6">
          {pkg.discount > 0 && (
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-gray-500 line-through text-lg">
                R$ {pkg.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
              <span className="text-red-500 font-semibold text-sm">
                -{pkg.discount}%
              </span>
            </div>
          )}
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-600">
              R$ {pkg.discountPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            
            <div className="text-blue-600 font-semibold text-lg">
              12x de R$ {installmentPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            
            <p className="text-sm text-gray-500">sem juros no cartão</p>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleViewDetails}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
          >
            <Eye className="h-5 w-5" />
            <span>Ver detalhes</span>
          </button>

          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Adicionar ao Carrinho</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;