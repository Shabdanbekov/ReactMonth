import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import React from "react";
import About from "./components/About/About";
import { useState } from "react";
import SwitchTheme from "./components/SwitchTheme/SwitchTheme";

function App() {
  const [theme, setTheme] = useState("light");
  const [switchTheme, setSwitchTheme] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const handleSwitchChange = () => {
    toggleTheme();
    setSwitchTheme(!switchTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <Link to="/" className="mainPage">
        POKEMONS
      </Link>
      <SwitchTheme
        className="changeTheme"
        onChange={handleSwitchChange}
        checked={switchTheme}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/About/:id" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
