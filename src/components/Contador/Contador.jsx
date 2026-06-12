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

    return(
        <>
        <section className={styles.body}>
            <p className={styles.p}>{contador}</p>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={reiniciarContador}>Reiniciar</button>            
                <button className={styles.button} onClick={atualizarContadorP}>+</button>
                <button className={styles.button} onClick={atualizarContadorN}>-</button>
                <button className={styles.button}>Sortear</button>
            </div>

        </section>

        </>
    )
}

export default Contador