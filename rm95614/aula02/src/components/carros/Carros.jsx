import React from "react";
import carro1 from '../../img/bronco.png'

export default function Carros(){
    return (
        <div>
            <figure>
            <img src={carro1} alt="Utilitário" width="200px"/>

                <figcaption>Um carro que enfrenta tudo. </figcaption>
            </figure>
            <ul>
                <li>Fusca</li>
                <li>Celta</li>
                <li>Ka</li>
                <li>Uno</li>
                <li>Onix</li>
            </ul>
            <h2>Parceiros</h2>
            <Parceiros />
        </div>

    )
}