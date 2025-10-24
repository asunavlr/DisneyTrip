
import React from 'react';
import { motion } from 'framer-motion';
import { cars } from '../data/mockData';
import CarCard from '../components/CarCard';

const Cars: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Aluguel de Carros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o veículo ideal para se locomover com conforto e segurança em Orlando
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
