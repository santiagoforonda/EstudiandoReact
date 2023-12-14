import React from "react";
import "../styles/Footer.css";


function Footer ({allProducts, setAllProducts,total, countProducts,setTotal,setCountProducts}){
    function deleteProduct(){
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    }
    return(
    <footer className="footer-contenedor">
    <div className="info">
        <h3 className="h3-listap">Cantidad de productos</h3 >
        <span className="cantidad">{countProducts}</span>
        <h3 className="h3-listap">Total:</h3 >
        <span className="total a pagar">${total}</span>
    </div>
    <div className="botones">
        <button className="vaciar-carro"  onClick={deleteProduct}>vaciar carrito </button>
        <button className="seguir-compra">Seguir con tu compra</button>
    </div>
    </footer>
    );
}
export default Footer;