import React from "react"
import Carros from './components/carros/Carros'
import ListaDeAlunos from "./components/listaDeAlunos/ListaDeAlunos"

export default function App() {

    const aluno = "Thais"
    const turma = "1TDSVJ"
    const profs = ['Alê','Ronqui','Sálvio', 'Michel', 'Gilberto', 'Fernando']

    let nomeCarro = 'Nissan Kicks'

    return (
        <div>
            <h1>ESTUDO SOBRE PROPS</h1>
            <div>
                <h2>Nome aluno: {aluno}</h2>
                <ListaDeAlunos 
                    nomeAluno={aluno}
                    propsTurma={turma}
                    profsProps={profs}
                />
            </div>
        </div>
    )
}