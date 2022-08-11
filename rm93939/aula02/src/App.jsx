import React from "react"
import Carros from "./components/carros"

export default function App(){

    const aluno = "Thais"
    const turma = "1TDSVJ"
    const profs = ["Alê","Ronqui","Sálvio","Michel","Gilberto","Fernando"]

    let nomeCarro = "Nissan kicks"

    return(
        <div>
            <h1>ESTUDO SOBRE PROPS</h1>
            <div>
                <h2>nome aluno : {aluno}</h2>      

                <Carros novoCarro={nomeCarro}/>

            </div>
        </div>
    )   
}