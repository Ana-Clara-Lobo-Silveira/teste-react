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
            <h1 className={styles.titulo}>Exemplos de useState e useEffect</h1>
            <section className={styles.card}>
                <h2 >1. Contador (useState)</h2>
                <p className={styles.valor}>{contador}</p>
                <div className={styles.botoes}>
                <button className={styles.botaoTema} onClick={aumentarContador}>+</button>
                <button className={styles.botaoTema}  onClick={diminuirContador}>-</button>
                </div>
                <p>O useEffect observa a variável <strong>contador</strong> e executa sempre que ele muda.</p>
            </section>

            <section className={styles.card}>
                <h2>2. Campo de texto (useState)</h2>
                <input className={styles.input} type="text" placeholder="Digite seu nome" value={nome} onChange={(digitado)=>setNome(digitado.target.value)} />
                <p>Olá, <strong>{nome || 'visitante'}</strong>!</p>
            </section>

            <section className={styles.card}>
                <h2>3. Alternância de tema (useState)</h2>
                <button className={styles.botaoTema} onClick={alternarTema}>Alternar tema para tema {temaEscuro ? 'Claro' : 'Escuro'}</button>
                <p>O useEffect observa a variável <strong>temaEscuro</strong> e executa sempre que o tema é alterado.</p>
            </section>
        </main>
    );
}
export default Tema;