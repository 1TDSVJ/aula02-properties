import React from 'react'

export default function ListaDeAlunos(props) {
  return (
    <div>
        <h2>INFORMAÇÕES</h2>
        <p>Nome aluno: {props.nomeAluno}</p>
        <p>Turma: {props.nomeTurma}</p>
        <h2>Professores</h2>
        <ul>
            <li>{props.professores[0]}</li>
            <li>{props.professores[1]}</li>
            <li>{props.professores[2]}</li>
            <li>{props.professores[3]}</li>
            <li>{props.professores[4]}</li>
            <li>{props.professores[5]}</li>
        </ul>
    </div>
  )
}
