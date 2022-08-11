import React from 'react'

export default function ListaAlunos(props) {
  return (
    <div>
        <h2>Informações</h2>
        <p>Nome aluno: {props.nmAluno}</p>
        <p>Turma: {props.turmaAluno}</p>
        <ul>
            <li>{props.profsAluno[0]}</li>
            <li>{props.profsAluno[1]}</li>
            <li>{props.profsAluno[2]}</li>
            <li>{props.profsAluno[3]}</li>
            <li>{props.profsAluno[4]}</li>
        </ul>
    </div>
  )
}
