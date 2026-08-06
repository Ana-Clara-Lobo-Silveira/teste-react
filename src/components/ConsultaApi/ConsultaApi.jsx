import { useEffect, useState } from "react";
import styles from './ConsultaApi.module.css'

function ConsultaApi(){
    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState(" ")
    async function BuscarUsuarios(){
    setLoading(true)
    setErro("")
    try {
        const respostaFetch = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(respostaFetch)
        const dados = await respostaFetch.json();
        console.log(dados)
    } catch (error) {
        
    }
    };

    return(
        <>
        <main>
            <h1>Titulo</h1>
            <button onClick={BuscarUsuarios}>{loading?'Carregando':'Consultar'}</button>
            <ul>
                <li>Nome 1</li>
                <li>Nome 2</li>
                <li>Nome 3</li>
            </ul>
        </main>
        </>
    );
}
export default ConsultaApi;