import React from 'react';
import Carros from './components/carros/Carros.jsx';
import ListaAlunos from './components/listaalunos/ListaAlunos.jsx';
export default function App() {
  const aluno = 'Rafão';
  const turma = '1TDSVJ';
  const profs = ['Alê', 'Ronqui', 'Salvio', 'Fernado', 'Gilberto', 'Michel'];
  let nomeCarro = 'Hyundai HB20';
  return (
    <>
      <h1>Estudo sobre props</h1>
      <div>
        <h2>Aluno: {aluno}</h2>
        <ListaAlunos nmAluno={aluno} turmaAluno={turma} profsAluno={profs} />
        {/* <Carros novoCarro={nomeCarro}/> */}
      </div>
    </>
  );
}
