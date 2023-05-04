import React from "react";
import Header from "./components/Header/Header";
import Card from "./components/Text/Text";
import Func from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const listHeader = ["Main", "About", "profile"];

  return (
    <div>
      <Header list={listHeader} />
      <Func />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
