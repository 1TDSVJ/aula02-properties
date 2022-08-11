import React from "react"
import Cabecalho from "./components/cabecalho/Cabecalho"
import Carros from "./components/carros/Carros"

export default function App(){
    return(
        <div>
            <h1>ESTUDO SOBRE PROPS</h1>
            <div>
                <h2>Resolução do Exercício-1</h2>
                <Cabecalho />
                <Carros />
            </div>
        </div>
    )
}