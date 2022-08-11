import React from "react";
import Carros from "./components/carros/Carros";
import ListaDeAlunos from "./components/listaDeAlunos/ListaDeAlunos";


const App = () => {

    const aluno = "Lucas"
    const turma = "1TDSVJ"
    const profs = ["Alexandre", "Ronqui", "Salvio", "Michel", "Gilberto", "Fernando"]
    let car = "Nissa Kicks"
  return (
    <div>
      <h1>Estudo sobre props</h1>
        <div>
            <h2>Nome do aluno: {aluno}</h2>
            <ListaDeAlunos name={aluno} sala={turma} profs={profs}/>
        </div>
    </div>
  );
};

export default App;
