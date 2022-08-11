import React from "react"
import Carros from './components/carros/Carros'
export default function App(){

    const aluno = "Marco"
    const turma = "1TDSVJ"
    const profs = ['Alê', 'Ronqui', 'Sálvio', 'Michel', 'Gilberto', 'Fernando' ]
    
    let nomeCarro = 'Nissan Kicks'
    
    return(
        <div>
            <h1>Estudo sobre Props</h1>
            <div>
                <h2>Nome Aluno: {aluno}</h2>
                <listaDeAlunos 
                alunoProps={aluno}
                turmaProps={turma}
                profsProps={profs}
                
                />

            </div>
        </div>
    )
}