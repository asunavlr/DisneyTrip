
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {ArrowLeft, Users, Calendar, Car, Home, Ticket, ShoppingCart, ChevronLeft, ChevronRight} from 'lucide-react';
import { packages, accommodations, cars, tickets } from '../data/mockData';

const PackageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pkg = packages.find(p => p.id === id);
  
  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Pacote não encontrado</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  const accommodation = accommodations.find(acc => acc.id === pkg.accommodationId);
  const car = cars.find(c => c.id === pkg.carId);
  const packageTickets = tickets.filter(t => pkg.ticketIds.includes(t.id));

  const totalPrice = pkg.discountPrice * numberOfPeople;
  const totalInstallmentPrice = totalPrice / 12;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === pkg.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? pkg.gallery.length - 1 : prev - 1
    );
  };

  const handleSimulatePurchase = () => {
    const purchaseData = {
      package: pkg,
      numberOfPeople,
      totalPrice,
      accommodation,
      car,
      tickets: packageTickets
    };
    
    // Salvar dados no localStorage para a tela de resumo
    localStorage.setItem('purchaseData', JSON.stringify(purchaseData));
    navigate('/purchase-summary');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar aos Pacotes</span>
          </button>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{pkg.name}</h1>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-5 w-5" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-5 w-5" />
                  <span>Até {accommodation?.maxGuests} pessoas</span>
                </div>
              </div>
            </div>
            <div className="text-right mt-4 lg:mt-0">
              <div className="text-3xl font-bold text-green-600">
                R$ {pkg.discountPrice.toLocaleString()}
              </div>
              <p className="text-gray-500">por pessoa</p>
            </div>
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-96 lg:h-[500px]">
              <img
                src={pkg.gallery[currentImageIndex]}
                alt={`${pkg.name} - Imagem ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {pkg.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {pkg.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-2 p-4">
              {pkg.gallery.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex ? 'border-purple-500' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Package Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Sobre este Pacote</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{pkg.detailedDescription}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {pkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Accommodation Details */}
            {accommodation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Home className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-800">Hospedagem</h3>
                </div>
                
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                  <img
                    src={accommodation.image}
                    alt={accommodation.name}
                    className="w-full md:w-48 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-2">{accommodation.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{accommodation.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>{accommodation.bedrooms} quartos</div>
                      <div>{accommodation.bathrooms} banheiros</div>
                      <div>Até {accommodation.maxGuests} pessoas</div>
                      <div className="text-purple-600 font-semibold">★ {accommodation.rating}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Car Details */}
            {car && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Car className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-800">Veículo</h3>
                </div>
                
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full md:w-48 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-2">{car.brand} {car.model}</h4>
                    <p className="text-gray-600 text-sm mb-3">{car.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>{car.passengers} passageiros</div>
                      <div>{car.luggage} bagagens</div>
                      <div>{car.transmission}</div>
                      <div className="text-purple-600 font-semibold">{car.category}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tickets Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Ticket className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-800">Ingressos</h3>
              </div>
              
              <div className="space-y-4">
                {packageTickets.map(ticket => (
                  <div key={ticket.id} className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                    <img
                      src={ticket.image}
                      alt={ticket.park}
                      className="w-full md:w-48 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-2">{ticket.park} - {ticket.type}</h4>
                      <p className="text-gray-600 text-sm mb-3">{ticket.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {ticket.features.map((feature, index) => (
                          <span
                            key={index}
                            className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-8"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Simular Compra</h3>
              
              {/* Number of People Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Número de Pessoas
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setNumberOfPeople(Math.max(1, numberOfPeople - 1))}
                    className="w-10 h-10 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center font-bold"
                  >
                    -
                  </button>
                  <div className="flex-1 text-center">
                    <div className="text-2xl font-bold text-gray-800">{numberOfPeople}</div>
                    <div className="text-sm text-gray-500">pessoas</div>
                  </div>
                  <button
                    onClick={() => setNumberOfPeople(Math.min(accommodation?.maxGuests || 12, numberOfPeople + 1))}
                    className="w-10 h-10 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all flex items-center justify-center font-bold"
                  >
                    +
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Máximo: {accommodation?.maxGuests} pessoas
                </p>
              </div>

              {/* Price Breakdown */}
              <div className="mb-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Preço por pessoa:</span>
                  <span className="font-semibold">R$ {pkg.discountPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Número de pessoas:</span>
                  <span className="font-semibold">{numberOfPeople}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">Total:</span>
                    <span className="text-2xl font-bold text-green-600">
                      R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-blue-600 font-semibold mt-2">
                    <span>Ou 12x de</span>
                    <span>R$ {totalInstallmentPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <p className="text-xs text-gray-500 text-right mt-1">sem juros no cartão</p>
                </div>
              </div>

              {/* Purchase Button */}
              <button
                onClick={handleSimulatePurchase}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Simular Compra</span>
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

export default PackageDetails;
