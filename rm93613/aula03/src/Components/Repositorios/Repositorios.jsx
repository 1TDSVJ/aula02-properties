import React, { useState } from 'react'
import ShowRepos from '../ShowRepos/ShowRepos'

export default function Repositorios() {

    const objEstilos = {
        noite: {backgroundColor:'red'},
        tarde: {backgroundColor:'orange'},
        manha: {backgroundColor:'blue'}
    }

    const [repositorios, setRepositorios] = useState("1TDSVJ")
    let vVariavel = 2022

    const alterarRepo = ()=>{
        setRepositorios(repositorios + 1)
        vVariavel += 5
        console.log(vVariavel)
    }

    return(
        <div>
            <h2 style={{backgroundColor: '#00ff00', textAlign:'center'}}>Exemplo de useState</h2>
            <p style={objEstilos.noite}>Meu repositorio : {repositorios}</p>
            <p style={objEstilos.tarde}>Minha Variável: {vVariavel}</p>
            <button onClick={()=> alterarRepo()}>Add-Repo</button>
            <ShowRepos
                repositorios={repositorios}
                setRepositorios={setRepositorios}
            />
        </div>
    )
}