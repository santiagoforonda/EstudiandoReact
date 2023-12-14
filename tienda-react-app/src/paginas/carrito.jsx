import React from "react";
import Footer from "../componentes/Footer";
import { useState } from 'react';
import ListaDeProductos from "../componentes/ListaDeProductos";
import Layout from '../componentes/layout_ingresado'

function Carrito(){

    const[cantidadPorProducto, setCantidadPorProducto]= useState(0)
    const[allProducts,setAllProducts]=useState([]);
    const[total, setTotal]=useState(0);
    const[countProducts, setCountProducts]=useState(0);
    return(
      <Layout> 
        <h1 className="titulo-carrito">Mis productos</h1>
        <ListaDeProductos 
          allProducts={allProducts} 
          setAllProducts={setAllProducts} 
          total={total} setTotal={setTotal} 
          countProducts={countProducts} 
          setCountProducts={setCountProducts}>
        </ListaDeProductos>
        <Footer 
          allProducts={allProducts} 
          setAllProducts={setAllProducts} 
          total={total} setTotal={setTotal} 
          countProducts={countProducts} 
          setCountProducts={setCountProducts}>
        </Footer>
    </Layout>
    );
}

export default Carrito;