
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {Sparkles, Gift, Users, Clock, Eye, ShoppingCart} from 'lucide-react';
import { packages } from '../data/mockData';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Disney Castle"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-500 p-4 rounded-full">
                <Sparkles className="h-12 w-12 text-purple-900" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Sua Viagem dos Sonhos
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
              Descubra a magia da Disney com nossos pacotes completos. 
              Hospedagem premium, carros confortáveis e ingressos para todos os parques!
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Por que escolher nossos pacotes?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos experiências completas e personalizadas para tornar sua viagem inesquecível
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Gift className="h-12 w-12" />,
                title: "Pacotes Completos",
                description: "Hospedagem, transporte e ingressos inclusos em um só lugar"
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Para Toda Família",
                description: "Opções para casais, famílias pequenas e grupos grandes"
              },
              {
                icon: <Clock className="h-12 w-12" />,
                title: "Economia de Tempo",
                description: "Planeje tudo de uma vez e aproveite mais sua viagem"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group hover:scale-105"
              >
                <div className="text-purple-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossos Pacotes Disney
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o pacote perfeito para sua família e viva momentos mágicos na Disney
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                    <p className="text-sm opacity-90">{pkg.duration}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{pkg.description}</p>

                  <div className="space-y-2 mb-6">
                    {pkg.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-3xl font-bold text-green-600">
                        R$ {pkg.discountPrice.toLocaleString()}
                      </div>
                      <p className="text-sm text-gray-500">por pessoa</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Link
                      to={`/package/${pkg.id}`}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Ver Detalhes</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Pronto para viver a magia?
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Não perca tempo! Nossos pacotes têm disponibilidade limitada e os melhores preços do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.querySelector('#packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 shadow-lg"
              >
                Escolher Pacote
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
