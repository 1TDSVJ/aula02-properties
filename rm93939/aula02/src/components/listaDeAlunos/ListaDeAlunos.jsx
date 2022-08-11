import React from "react"

export default function ListaDeAluno(props) {
    return(
        <div>
            <h2>INFORMAÇÕES</h2>
            <p>Nome aluno: {props.alunoProps}</p>
            <p>Turma : {props.turmaProps}</p>
            <h2>Prefessores</h2>
            <ul>
                <li>{props.ProfsProps[0]}</li>
                <li>{props.ProfsProps[1]}</li>
                <li>{props.ProfsProps[2]}</li>
                <li>{props.ProfsProps[3]}</li>
                <li>{props.ProfsProps[4]}</li>
                <li>{props.ProfsProps[5]}</li>
            </ul>
        </div>
    )
    
}