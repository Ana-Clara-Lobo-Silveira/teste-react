import { useState } from "react"
import styles from "./Contador.module.css"

function Contador(){
    // const [contador, setContador] = useState(0)
    // atualizarContadorP = () =>{
    //     setContador(contador + 1)
    // }
    // atualizarContadorN = () =>{
    //     setContador(contador - 1)
    // }
    return(
        <>
        <section className={styles.body}>
            <p className={styles.p}>00</p>
            <div className={styles.buttons}>
                <button className={styles.button}>Reiniciar</button>            
                <button className={styles.button}>+</button>
                <button className={styles.button}>-</button>
                <button className={styles.button}>Sortear</button>
            </div>

        </section>

        </>
    )
}

export default Contador