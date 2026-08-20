import { useEffect, useState } from "react";

const Produto = ({produto}) =>{

    const [dados, setDados] = useState(null);
    useEffect(()=>{
        async function fetchProduto(){
            if (!produto) return;
        const respFetch =  await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`);
        const listaP = await respFetch.json();
        setDados(listaP);
        console.log(listaP);
    }
    fetchProduto();
    }, 
    [produto])

if (dados === null){
    return <p>Carregando...</p>
}

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
