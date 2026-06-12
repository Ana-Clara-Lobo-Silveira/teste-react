import { useState } from "react"
import styles from "./Contador.module.css"

function Contador(){
    const [contador, setContador] = useState(0)
    const atualizarContadorP = () =>{
        setContador(contador + 1);
    }
    const atualizarContadorN = () =>{
        setContador(contador - 1);
    }
    const reiniciarContador = () =>{
        setContador(0);
    }
    const sortearContador = () =>{
        setContador(Math.floor(Math.random()*(100)+1));
    }

    const obterClasse = () => {
        if (contador>0) return styles.valorP
        if (contador<0) return styles.valorN
        return styles.p
    }
    const formatarContador = () =>{
        if (contador >= 0 && contador < 10){
            return `0${contador}`;
        }
        return contador;
    }

    return(
        <>
        <section className={styles.body}>
            <p className={obterClasse()}>{formatarContador()}</p>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={reiniciarContador}>Reiniciar</button>            
                <button className={styles.button} onClick={atualizarContadorP}>+</button>
                <button className={styles.button} onClick={atualizarContadorN}>-</button>
                <button className={styles.button} onClick={sortearContador}>Sortear</button>
            </div>

        </section>

        </>
    )
}

export default Contador