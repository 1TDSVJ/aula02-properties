import React from 'react';

export default function ListaDeAlunos(props) {
  return (
    <div>
      <h2>INFORMAÇÕES</h2>
      <p>Nome aluno: {props.alunoProps}</p>
      <p>Turma: {props.turmaProps}</p>
      <h2>Professores</h2>
      <ul>
        <li>{props.profsProps[0]}</li>
        <li>{props.profsProps[1]}</li>
        <li>{props.profsProps[2]}</li>
        <li>{props.profsProps[3]}</li>
        <li>{props.profsProps[4]}</li>
        <li>{props.profsProps[5]}</li>
      </ul>
    </div>
  )
}