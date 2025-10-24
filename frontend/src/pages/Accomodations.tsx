
import React from 'react';
import { motion } from 'framer-motion';
import { accommodations } from '../data/mockData';
import AccommodationCard from '../components/AccomodationCard';

const Accommodations: React.FC = () => {
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
            Hospedagens
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre a hospedagem perfeita para sua estadia em Orlando. Casas, apartamentos e villas com todo conforto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <motion.div
              key={accommodation.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AccommodationCard accommodation={accommodation} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accommodations;
