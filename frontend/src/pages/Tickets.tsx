
import React from 'react';
import { motion } from 'framer-motion';
import { tickets } from '../data/mockData';
import TicketCard from '../components/TicketCard';

const Tickets: React.FC = () => {
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
            Ingressos Disney
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Garanta sua entrada nos parques mais mágicos do mundo. Opções para todos os parques e durações
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TicketCard ticket={ticket} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tickets;
