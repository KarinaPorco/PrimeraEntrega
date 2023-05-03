import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer Greeting={"Bienvenidos"} />
    </>
  )
}

export default App
