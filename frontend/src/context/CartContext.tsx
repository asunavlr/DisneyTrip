import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Package, Accommodation, Car, Ticket } from '../data/mockData';

interface CartItem {
  type: 'package' | 'accommodation' | 'car' | 'ticket';
  item: Package | Accommodation | Car | Ticket;
  quantity: number;
  nights?: number; // Para hospedagens
  days?: number; // Para carros
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, type: string) => void;
  updateQuantity: (id: string, type: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: CartItem) => {
    setItems(prevItems => {
      const existingIndex = prevItems.findIndex(
        item => item.item.id === newItem.item.id && item.type === newItem.type
      );

      if (existingIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        return [...prevItems, newItem];
      }
    });
  };

  const removeItem = (id: string, type: string) => {
    setItems(prevItems => prevItems.filter(
      item => !(item.item.id === id && item.type === type)
    ));
  };

  const updateQuantity = (id: string, type: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id, type);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.item.id === id && item.type === type
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, cartItem) => {
      let itemPrice = 0;
      
      if (cartItem.type === 'package') {
        const pkg = cartItem.item as Package;
        itemPrice = pkg.discountPrice;
      } else if (cartItem.type === 'accommodation') {
        const acc = cartItem.item as Accommodation;
        itemPrice = acc.price * (cartItem.nights || 1);
      } else if (cartItem.type === 'car') {
        const car = cartItem.item as Car;
        itemPrice = car.price * (cartItem.days || 1);
      } else if (cartItem.type === 'ticket') {
        const ticket = cartItem.item as Ticket;
        itemPrice = ticket.price;
      }
      
      return total + (itemPrice * cartItem.quantity);
    }, 0);
  };

  const getItemCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};