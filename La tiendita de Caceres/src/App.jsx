import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/NavBar";
import Logo from "./components/Logo";


//navBar desde abajo
function App() {
  return (
    <div className="app">
      <NavBar />
      <Logo />
      <ItemListContainer gretting="Somos la boutique de La Voz De Cáceres"/>
    </div>
  );
}

export default App;
