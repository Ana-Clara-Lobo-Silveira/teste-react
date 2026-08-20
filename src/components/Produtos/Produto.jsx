import { useEffect, useState } from "react";

function Produto(){

    useEffect(()=>{
        async function fetchProduto(){
        const respFetch =  await fetch("https://ranekapi.origamid.dev/json/api/produto/");
        const dados = await respFetch.json();
        console.log(dados)
    }
    fetchProduto();
    }, [])



    return(
        <>
        <h1>Resultado no console</h1>
        </>)
}
export default Produto;