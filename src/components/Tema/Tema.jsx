import { useEffect, useState } from "react";
import styles from "./Tema.module.css";

function Tema(){
 // Controle de situações variáveis
    const [contador, setContador] = useState(0);
    const [nome, setNome] = useState("");
    const [temaEscuro, setTemaEscuro] = useState(false);
// ---------------------------------------------------------------

// Executa apenas uma vez
    useEffect(()=>{
        console.log('Componente carregado pela primeira vez.')
    },[]);
    
    // Executa de acordo com a respectiva mudança
    useEffect(()=>{
        console.log(`O contador foi alterado para: ${contador}`)
    },[contador]);
    useEffect(()=>{
        console.log('Tema alterado:', temaEscuro ? 'Escuro' : 'Claro')
    },[temaEscuro]);
// ---------------------------------------------------------------
    
// Funções de alternância
    function aumentarContador(){setContador(contador + 1);};
    function diminuirContador(){setContador(contador - 1);};
    function alternarTema(){setTemaEscuro(!temaEscuro)};
// ---------------------------------------------------------------

    return(
        <main className={`${styles.container} ${temaEscuro ? styles.temaEscuro : styles.temaClaro}`}>
            
            <section></section>
            <section></section>
            <section></section>
        </main>
    );
}
export default Tema;