import { useState, useEffect } from "react";
import "./App.css";
import { fetchPokemons } from "./components/api/getPokemons";
import PokemonCard from "./components/PokemonCards/PokemonCard";
import Switch from "./components/Switch/Switch";

function App() {
  const [theme, setTheme] = useState("light");
  const [pokemonList, setPokemonList] = useState([]);
  const [switchTheme, setSwitchTheme] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    fetchPokemons().then((data) => {
      setPokemonList([...data]);
    });
  }, []);

  const handleSwitchChange = () => {
    toggleTheme();
    setSwitchTheme(!switchTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <div className="all">
          <div className="title"> POKEMONS </div>
          <Switch
            className="changeTheme"
            onChange={handleSwitchChange}
            checked={switchTheme}
          />
        </div>

        <div className="pokemonList">
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
