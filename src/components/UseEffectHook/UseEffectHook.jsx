import { useEffect, useState } from "react";
import styles from "./UseEffectHook.module.css";

function UseEffectHook(){
    const [contador, setContador] = useState(0);
    const titulo = 'Clicou ';
    console.log('Sempre ocorre, mas antes do useEffect')
    
    useEffect(()=>{
        console.log('Ocorre quando renderizar.')
    })

    useEffect(()=>{
        console.log('Ocorre quando renderizar a primeira vez.')
    }, [])
    return(
        <>
        <button className={styles.button} onClick={()=> setContador(contador+1)}>{contador}</button>
        </>
    );
}
export default UseEffectHook;