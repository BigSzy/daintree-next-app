"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ShoppingBasketContext = createContext();

const ShoppingBasketContextProvider = ({ children }) => {
  const [items, setItems] = useState(readItemsFromStortage());

  function readItemsFromStortage() {
    if (typeof localStorage !== "undefined") {
      const item = localStorage.getItem("Basket");
      return item ? JSON.parse(item) : [];
    }
    return [];
  }

  useEffect(() => {
    localStorage.setItem("Basket", JSON.stringify(items));
  }, [items]);

  const addItem = (product) => {
    setItems((prev) => addProduct(prev, product));
  };

  
  function addProduct(products, product) {
    if (products.some((p) => p.id == product.id)) {
      return products.map((p) =>
      p.id == product.id ? { ...product, qty: p.qty + 1 } : p
      );
    } else {
      return [...products, { ...product, qty: 1 }];
    }
  }
  
  const removeProduct = (product) => {
    setItems((prev) => prev.filter((p) => p.id != product.id));
  };
  
  const removeItem = (product) => {
    if (product.qty === 1) {
      return setItems((prev) => prev.filter((p) => p.id != product.id));
    } else {
      setItems((prev) =>
      prev.map((p) =>
      p.id == product.id ? { ...product, qty: p.qty - 1 } : p
      )
      );
    }
  };

  function clearBasket (  ) {
    if (items.length > 0 ) {
      setItems([]);
    } 
  }
  
  function totalPrice() {
    return items
      .reduce((total, item) => total + item.price * item.qty, 0)
      .toFixed(2);
  }
  return (
    <ShoppingBasketContext.Provider
      value={{ items, addItem, removeProduct, removeItem, totalPrice, clearBasket }}
    >
      {children}
    </ShoppingBasketContext.Provider>
  );
};

const useBasket = () => useContext(ShoppingBasketContext);

export { useBasket, ShoppingBasketContextProvider };
