import React from 'react'

const ListaDeAlunos = (props) => {
  return (
    <div>
        <h2>INFORMAÇÕES</h2>
        <p>Nome aluno: {props.name}</p>
        <p>Turma: {props.sala}</p>
        <ul>
            <li>{props.profs[0]}</li>
            <li>{props.profs[1]}</li>
            <li>{props.profs[2]}</li>
            <li>{props.profs[3]}</li>
            <li>{props.profs[4]}</li>
            <li>{props.profs[5]}</li>
        </ul>
    </div>
  )
}

export default ListaDeAlunos