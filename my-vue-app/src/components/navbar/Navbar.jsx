import './Navbar.css'
import Cartwidget from '../Cartwidget/Cartwidget'

const Navbar = () => {
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <h1>Veterinaria | Roma</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Inicio
                        </li>
                        <li className="nav-item">
                            Nosotros
                        </li>
                        <li className="nav-item">
                            Productos
                        </li>
                        <li className="nav-item">
                            Redes Sociales
                            
                        </li>
                    </ul>
                </nav>
                <Cartwidget />
            </div>
        </header>

    )
}

export default Navbar