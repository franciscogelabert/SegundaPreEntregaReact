import React from "react";
import "./style.css";
import Navbar from './components/navbar/NavBar.jsx';
import Greeting from './components/main/Greeting.jsx';
import ProductDetail from './components/product/ProductDetail.jsx'
import Contador from './components/contador/Contador.jsx'


export default function App() {
  return (
    <>
      <Navbar />
      <Greeting titulo1="Bienvenido a Foodier " titulo2="Un Mundo de recetas y sabores.." />
      
    </>
  );
}

