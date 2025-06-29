import React from "react";
import ProductList from "../components/Product/ProductList";
import {  useCart } from '../context/CartContext'
import Alert from '../components/Alert';

// This is the Shop component that renders the product list and displays alerts if any.
// It uses the useCart context to access the alert state.

const Shop = () => {
    const { alert } = useCart()
  return (
    <div className="flex flex-col w-full">
      {alert && <Alert type={alert.type} message={alert.message} />}
      <ProductList />
    </div>
  );
};

export default Shop;
