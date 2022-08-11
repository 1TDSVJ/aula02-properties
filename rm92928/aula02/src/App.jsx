import React from "react";
import Cabecalho from "./components/cabecalho/cabecalho";
import Carros from "./components/carros/Carros";

export default function App(){ // Dá visibilidade ao componete na aplicação
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

/*
return(
        <> // Fragment não aparece na estrutura (não interfere no código)
            <h1>ESTUDO SOBRE PROPS</h1> 
        </> 
        <React.Frgment> // Usado quando se quer passar parâmentros
            <h1>ESTUDO SOBRE PROPS</h1> 
        </React.Frgment> 
    )
*/