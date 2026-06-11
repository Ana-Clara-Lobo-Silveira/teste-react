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
        <p className={styles.p}>0</p>
        <button className={styles.button}>Aumentar</button>
        <button className={styles.button}>Diminuir</button>
        <button className={styles.button}>Reiniciar</button>
        </>
    )
}

export default Contador