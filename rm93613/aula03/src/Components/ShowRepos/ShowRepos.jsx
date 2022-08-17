import React, { useEffect } from 'react'

export default function ShowRepos(props) {

    useEffect(async ()=>{

        const response = await fetch("https://api.github.com/users")
        const data = await response.json()
        props.setRepositorios(data)

    },[])

    return(
        <div>
            <h2>Lista de Repositórios</h2>
            <p>{props.repositorios}</p>
            <button onClick={()=> props.setRepositorios("Alterado no filho")}>Alterando pelo filho</button>
        </div>
    )
}