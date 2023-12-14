
import BotonAgregarProducto from './BotonAgregarProducto';
import Producto from './Producto';
import "../styles/ListaDeProductos.css";

function ListaDeProductos({allProducts, setAllProducts, countProducts, setCountProducts,total,setTotal}){
    const agregarProducto = producto=>{
      allProducts=[producto,...allProducts];
      setAllProducts(allProducts);
      if(allProducts.find(item => item.id === producto.id)){
          const products = allProducts.map(item=>item.id===producto.id? {...item,cantidad: +item.cantidad + 1 }: item);
          setTotal(total+producto.precio* producto.cantidad);
          setCountProducts(setCountProducts + producto.cantidad);
          return setAllProducts([...products]);
      }
      setTotal(total+producto.precio* producto.cantidad);
      setCountProducts(countProducts + producto.cantidad);
      setAllProducts(allProducts);
    }
    function eliminarProducto(id, precio,cantidad){
      const productosActualizados = allProducts.filter(producto=>producto.id!==id);
      setAllProducts(productosActualizados);
      setTotal(total -precio*cantidad );
      setCountProducts(countProducts-cantidad);
    }
    return(
        <>
        {/*<BotonAgregarProducto onClick={agregarProducto}></BotonAgregarProducto>*/}
        <div className='producto-lista-contenedor'>
            {
              allProducts.map((producto)=><Producto className='producto' 
              key={producto.id} id={producto.id} imagen={producto.imagen} descripcion={producto.descripcion} cantidad={producto.cantidad} precio={producto.precio} eliminarProducto={eliminarProducto}>
              </Producto>)
            }
        </div>
        </>
    );
    }
    export default ListaDeProductos;