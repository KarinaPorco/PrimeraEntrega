import './Cartwidget.css'

const Cartwidget = () => {
    const imgCarrito = "https://st2.depositphotos.com/3665639/7453/v/450/depositphotos_74537483-stock-illustration-shopping-cart-icon.jpg"; 
  return (
    <div>
        <img src= {imgCarrito} alt="Carrito de Compras" />
        <p>10</p>
    </div>
  )
}

export default Cartwidget