import React from "react"
import ListaDeAlunos from "./components/listaDeAlunos/ListaDeAlunos"
export default function App(){

    const aluno = "Gustavo"
    const turma = "1TDSVJ"
    const profs = ["Alexandre","Ronqui","Sálvio","Michel","Gilberto","Fernando"]

    
    return(
        <div>
            <h1>ESTUDO SOBRE PROPS</h1>
            <div>
                <h2>Nome aluno: {aluno}</h2>
                <ListaDeAlunos 
                alunoProps={aluno} 
                turmaProps={turma}
                profsProps={profs}/>
            </div>
        </div>
    
    
    )
}