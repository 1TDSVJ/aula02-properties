import React from "react";
import carro1 from "../../assets/img/carrinho.png";
import Parceiros from "../parceiros/Parceiros";

const Carros = (props) => {
  return (
    <div>
        <figure>
            <img src={carro1} alt="carro" width="200px"/>
            <figcaption>Um carro que enfrenta tudo</figcaption>
        </figure>
        <ul>
            <li>Ka</li>
            <li>Celta</li>
            <li>Fusca</li>
            <li>Uno</li>
            <li>Onix</li>
            <li>{props.car}</li>
        </ul>
        <h2>Parceiros</h2>
        <Parceiros />
    </div>
  );
};

export default Carros;
