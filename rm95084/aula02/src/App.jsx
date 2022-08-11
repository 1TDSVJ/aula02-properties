import React from "react";
import Cabecalho from "./components/cabecalho/Cabecalho";
import Carros from "./components/carros/Carros";

const App = () => {
  return (
    <div>
      <h1>Estudo sobre props</h1>
        <div>
            <h2>Resolução do ex1</h2>
            <Cabecalho />
            <Carros />
        </div>
    </div>
  );
};

export default App;
