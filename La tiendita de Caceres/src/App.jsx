import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/NavBar";

//navBar desde abajo
function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer gretting="Somos la boutique de La Voz De Cáceres"/>
    </div>
  );
}

export default App;
