
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {ArrowLeft, CheckCircle, Home, Car, Ticket, Users, Calendar, CreditCard, MapPin} from 'lucide-react';
import { Package, Accommodation, Car as CarType, Ticket as TicketType } from '../data/mockData';
import toast from 'react-hot-toast';

interface PurchaseData {
  package: Package;
  numberOfPeople: number;
  totalPrice: number;
  accommodation: Accommodation;
  car: CarType;
  tickets: TicketType[];
}

const PurchaseSummary: React.FC = () => {
  const navigate = useNavigate();
  const [purchaseData, setPurchaseData] = useState<PurchaseData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('purchaseData');
    if (savedData) {
      setPurchaseData(JSON.parse(savedData));
    } else {
      // Se não há dados, redireciona para a home
      navigate('/');
    }
  }, [navigate]);

  const handleFinalizePurchase = async () => {
    setIsProcessing(true);
    
    // Simula processamento da compra
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Compra finalizada com sucesso! 🎉', {
      duration: 4000,
      style: {
        borderRadius: '10px',
        background: '#10B981',
        color: '#fff',
      },
    });
    
    // Limpa os dados da compra
    localStorage.removeItem('purchaseData');
    
    // Redireciona para a home após finalizar
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  if (!purchaseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Carregando...</h2>
        </div>
      </div>
    );
  }

  const { package: pkg, numberOfPeople, totalPrice, accommodation, car, tickets } = purchaseData;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Resumo da Compra</h1>
            <p className="text-xl text-gray-600">Confira os detalhes do seu pacote Disney</p>
          </div>
        </motion.div>

        {/* Package Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
        >
          <div className="relative h-48">
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-6 text-white">
              <h2 className="text-2xl font-bold mb-1">{pkg.name}</h2>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{numberOfPeople} pessoas</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Package Details */}
          <div className="space-y-6">
            {/* Accommodation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Home className="h-6 w-6 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-800">Hospedagem</h3>
              </div>
              
              <div className="flex space-x-4">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{accommodation.name}</h4>
                  <div className="flex items-center space-x-1 text-sm text-gray-600 mb-1">
                    <MapPin className="h-3 w-3" />
                    <span>{accommodation.location}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {accommodation.bedrooms} quartos • {accommodation.bathrooms} banheiros
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Car */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Car className="h-6 w-6 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-800">Veículo</h3>
              </div>
              
              <div className="flex space-x-4">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{car.brand} {car.model}</h4>
                  <div className="text-sm text-gray-600">
                    {car.category} • {car.passengers} passageiros
                  </div>
                  <div className="text-sm text-gray-600">
                    {car.transmission} • {car.luggage} bagagens
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tickets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Ticket className="h-6 w-6 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-800">Ingressos</h3>
              </div>
              
              <div className="space-y-3">
                {tickets.map(ticket => (
                  <div key={ticket.id} className="flex space-x-4">
                    <img
                      src={ticket.image}
                      alt={ticket.park}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{ticket.park}</h4>
                      <div className="text-sm text-gray-600">
                        {ticket.type} • {ticket.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6 sticky top-8"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Resumo do Pedido</h3>
              
              {/* Price Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pacote:</span>
                  <span className="font-semibold">{pkg.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Preço por pessoa:</span>
                  <span className="font-semibold">R$ {pkg.discountPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Número de pessoas:</span>
                  <span className="font-semibold">{numberOfPeople}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">Total:</span>
                    <span className="text-2xl font-bold text-green-600">
                      R$ {totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Included Items */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Incluído no Pacote:</h4>
                <div className="space-y-2">
                  {pkg.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Finalize Button */}
              <button
                onClick={handleFinalizePurchase}
                disabled={isProcessing}
                className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isProcessing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 hover:scale-105'
                } text-white`}
              >
                <CreditCard className="h-5 w-5" />
                <span>
                  {isProcessing ? 'Processando...' : 'Finalizar Compra'}
                </span>
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-3">
                * Esta é apenas uma simulação. Nenhuma cobrança será realizada.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSummary;
