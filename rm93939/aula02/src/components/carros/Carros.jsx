import React from "react"
import carro1 from "../../img/bronco.jpg"

export default function Carros() {
    return(
        <div>
            <figure>
                <img src={carro1} alt="Utilitario!" />
                <figcaption>CAROO</figcaption>
            </figure>
            <ul>
                <li>fusca</li>
                <li>celta</li>
                <li>ka</li>
                <li>Uno</li>
                <li>Onix</li>
            </ul>
        </div>
    )
}