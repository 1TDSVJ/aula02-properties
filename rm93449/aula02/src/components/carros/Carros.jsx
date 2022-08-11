import React from "react"
import carro1 from "../../img/carro.png"
import Parceiros from "../Parceiros/Parceiros"

export default function Carros(){
    return(
        <div>
            <figure>
                <img src={carro1} alt="UTILITÁRIO!" />
                <figcaption>Um carro que enfrenta tudo.</figcaption>
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