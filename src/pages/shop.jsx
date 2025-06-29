import React from "react";
import ProductList from "../components/Product/ProductList";
import {  useCart } from '../context/CartContext'
import Alert from '../components/Alert';


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
