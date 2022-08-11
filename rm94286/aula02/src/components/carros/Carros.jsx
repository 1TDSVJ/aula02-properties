import React from "react";
import carro1 from "../../img/bronco.jpg";
import Parceiros from "../parceiros/Parceiros";

export default function Carros() {
  return (
    <div>
      <figure>
        <img src={carro1} alt="UTILITÁRIO" width="200px" />
        <figcaption>Um carro que enfrenta tudo.</figcaption>
      </figure>
      <ul>
        <li>Onix</li>
        <li>Gol</li>
        <li>Uno</li>
        <li>Ka</li>
        <li>Celta</li>
      </ul>
      <h2>Parceiros</h2>
      <Parceiros />
    </div>
  );
}
