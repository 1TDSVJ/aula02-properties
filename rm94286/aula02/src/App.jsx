import React from "react";
import ListaDeAlunos from "./components/listaDeAlunos/ListaDeAlunos";
export default function App() {
    
    const aluno = "Leo";
    const turma = "1TDSVJ";
    const professores = ["Alê", "Ronqui", "Sálvio", "Fernando", "Gilberto", "Michel"];


    return (
    <div>
      <h1>Estudo sobre props</h1>
      <div>
        <h2>Nome aluno: {aluno}</h2>
        <ListaDeAlunos nomeAluno={aluno} nomeTurma={turma} professores={professores}/>
      </div>
    </div>
  );
}
