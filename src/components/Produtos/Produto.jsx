import { useEffect, useState } from "react";

const Produto = ({produto}) =>{

    const [dados, setDados] = useState(null);
    useEffect(()=>{
        async function fetchProduto(){
        const respFetch =  await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`);
        const dados = await respFetch.json();
        setDados(dados);
        console.log(dados);
    }
    fetchProduto();
    }, 
    [])



    return(
        <>
        <section>

            <h1>Resultado no console</h1>
            <p> Produto:{dados.nome}</p>
            <p> Valor:R${dados.preco}</p>
        </section>  

        
        </>)
}
export default Produto;