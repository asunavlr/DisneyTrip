
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {Trash2, Plus, Minus, ShoppingBag, CreditCard, MapPin, User} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Package, Accommodation, Car, Ticket } from '../data/mockData';
import toast from 'react-hot-toast';

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleQuantityChange = (id: string, type: string, change: number) => {
    const item = items.find(item => item.item.id === id && item.type === type);
    if (item) {
      updateQuantity(id, type, item.quantity + change);
    }
  };

  const handleRemoveItem = (id: string, type: string, itemName: string) => {
    removeItem(id, type);
    toast.success(`${itemName} removido do carrinho!`, {
      icon: '🗑️',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const getItemPrice = (item: any, type: string, quantity: number, nights?: number, days?: number) => {
    let price = 0;
    if (type === 'package') {
      price = (item as Package).discountPrice;
    } else if (type === 'accommodation') {
      price = (item as Accommodation).price * (nights || 1);
    } else if (type === 'car') {
      price = (item as Car).price * (days || 1);
    } else if (type === 'ticket') {
      price = (item as Ticket).price;
    }
    return price * quantity;
  };

  const getItemDisplayName = (item: any, type: string) => {
    if (type === 'package') return (item as Package).name;
    if (type === 'accommodation') return (item as Accommodation).name;
    if (type === 'car') return `${(item as Car).brand} ${(item as Car).model}`;
    if (type === 'ticket') return `${(item as Ticket).park} - ${(item as Ticket).type}`;
    return 'Item';
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      toast.error('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    // Simular processamento do pedido
    toast.loading('Processando seu pedido...', { duration: 2000 });
    
    setTimeout(() => {
      toast.success('Pedido confirmado! Você receberá um email com os detalhes.', {
        duration: 4000,
        icon: '🎉',
      });
      clearCart();
      setShowCheckout(false);
      setCustomerInfo({ name: '', email: '', phone: '', address: '' });
    }, 2000);
  };

  const totalPrice = getTotalPrice();
  const totalInstallmentPrice = totalPrice / 12;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Seu carrinho está vazio
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Adicione alguns pacotes incríveis para começar sua aventura Disney!
              </p>
              <a
                href="/packages"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-105"
              >
                <span>Ver Pacotes</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Carrinho de Compras
          </h1>
          <p className="text-xl text-gray-600">
            Revise seus itens antes de finalizar a compra
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="space-y-6">
                {items.map((cartItem, index) => {
                  const itemPrice = getItemPrice(cartItem.item, cartItem.type, cartItem.quantity, cartItem.nights, cartItem.days);
                  const itemInstallmentPrice = itemPrice / 12;
                  
                  return (
                    <motion.div
                      key={`${cartItem.item.id}-${cartItem.type}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <img
                        src={cartItem.item.image}
                        alt={getItemDisplayName(cartItem.item, cartItem.type)}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">
                          {getItemDisplayName(cartItem.item, cartItem.type)}
                        </h3>
                        <div className="text-sm text-gray-600 mt-1">
                          {cartItem.type === 'accommodation' && cartItem.nights && (
                            <span>{cartItem.nights} noite{cartItem.nights > 1 ? 's' : ''}</span>
                          )}
                          {cartItem.type === 'car' && cartItem.days && (
                            <span>{cartItem.days} dia{cartItem.days > 1 ? 's' : ''}</span>
                          )}
                        </div>
                        <div className="mt-2">
                          <div className="text-lg font-bold text-green-600">
                            R$ {itemPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </div>
                          <div className="text-blue-600 font-semibold text-sm">
                            12x de R$ {itemInstallmentPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleQuantityChange(cartItem.item.id, cartItem.type, -1)}
                          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-semibold w-8 text-center">{cartItem.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(cartItem.item.id, cartItem.type, 1)}
                          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemoveItem(cartItem.item.id, cartItem.type, getItemDisplayName(cartItem.item, cartItem.type))}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Resumo do Pedido
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({items.length} {items.length === 1 ? 'item' : 'itens'})</span>
                  <span>R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Taxa de serviço</span>
                  <span>Grátis</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold text-green-600 mb-2">
                    <span>Total</span>
                    <span>R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-blue-600 font-semibold">
                    <span>Ou 12x de</span>
                    <span>R$ {totalInstallmentPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <p className="text-sm text-gray-500 text-right mt-1">sem juros no cartão</p>
                </div>
              </div>

              <button
                onClick={() => setShowCheckout(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <CreditCard className="h-5 w-5" />
                <span>Finalizar Compra</span>
              </button>

              <button
                onClick={clearCart}
                className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-all"
              >
                Limpar Carrinho
              </button>
            </motion.div>
          </div>
        </div>

        {/* Checkout Modal */}
        {showCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Finalizar Compra
              </h2>

              <form onSubmit={handleCheckout} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4 inline mr-2" />
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="h-4 w-4 inline mr-2" />
                    Endereço
                  </label>
                  <textarea
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows={3}
                  />
                </div>

                <div className="border-t pt-4 mt-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xl font-bold text-green-600">
                      <span>Total: R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between text-blue-600 font-semibold">
                      <span>Ou 12x de R$ {totalInstallmentPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <p className="text-sm text-gray-500 text-right">sem juros no cartão</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowCheckout(false)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-all"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-105"
                  >
                    Confirmar
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
