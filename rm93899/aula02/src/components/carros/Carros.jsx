import React from 'react'
import carro1 from '../../img/bronco.png'
import Parceiros from '../parceiros/Parceiros'

export default function Carros(param) {
  return (
    <div>
      <figure>
        <img src={carro1} alt="UTILITÁRIO" width="200px" />
        <figcaption>Um carro que enfrenta tudo.</figcaption>
      </figure>
      <ul>
        <li>Fusca</li>
        <li>Celta</li>
        <li>Ka</li>
        <li>Uno</li>
        <li>Onix</li>
        <li>{param.novoCarro}</li>
      </ul>
      <h2>Parceiros</h2>
      <Parceiros />
    </div>
  )
}