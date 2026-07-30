import { useEffect, useState } from "react";
import styles from "./Tema.module.css";

function Tema(){
    // Controle de situações variáveis
    const [contador, setContador] = useState(0);
    const [nome, setNome] = useState("");
    const [temaEscuro, setTemaEscuro] = useState(false);
// ---------------------------------------------------------------
    
// Executa apenas uma vez
    useEffect(()=>{},[]);

    // Executa de acordo com a respectiva mudança
    useEffect(()=>{},[contador]);
    useEffect(()=>{},[temaEscuro]);
// ---------------------------------------------------------------

    // Funções de alternância
    function aumentarContador(){};
    function diminuirContador(){};
    function alternarTema(){};
// ---------------------------------------------------------------

    return(
        <main></main>
    );
}
export default Tema;