import React from "react";
// import Cabecalho from "./components/cabecalho/cabecalho";
// import Carros from "./components/carros/Carros";
import ListaDeAlunos from "./components/listaDeAlunos/ListaDeAlunos";

export default function App(){ // Dá visibilidade ao componete na aplicação
    
    const aluno = "Thais";
    const turma = "1TDSVJ";
    const profs = ["Alexandre", "Ronqui", "Sálvio", "Michel", "Gilberto", "Fernando"];

    return(
        <div> 
            <h1>ESTUDO SOBRE PROPS</h1>
            <p>Nome aluno : {aluno}</p>
            <ListaDeAlunos 
            nomeAluno={aluno}
            turmaProps={turma}
            profsProps={profs}
            />
        </div> 
    )
}

/*
return(
        <> // Fragment não aparece na estrutura (não interfere no código)
            <h1>ESTUDO SOBRE PROPS</h1> 
        </> 
        <React.Frgment> // Usado quando se quer passar parâmentros
            <h1>ESTUDO SOBRE PROPS</h1> 
        </React.Frgment> 
    )
*/

/*
Passar parâmetro tem um fluxo - unidiresional
e uma regra - pai para o filho
*/

/* correção exercicio
            <div>
                <h2>Resolução do Exercício-1</h2>
                <Cabecalho />
                <Carros />
            </div>
*/