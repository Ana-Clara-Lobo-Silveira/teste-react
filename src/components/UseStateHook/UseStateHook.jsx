import {useState} from "react"
import styles from "./UseStateHook.module.css"
function UseStateHook(){
    const [nome, setNome]  = useState('Clique em mudar.')
    const [idade, setIdade]  = useState(0)
    const [eFalso, seteFalso] = useState (false)
    const [fruta, setFruta] = useState ()

    const atualizarNome = () => {
        setNome('Ana');
    }
    const atualizarIdade = () => {
        setIdade(idade+1)
    }
    const verificarEstado = () =>{
        seteFalso(!eFalso)
    }
    const verificarFruta = () =>{
        setFruta('Morango')
    }
    return(
        <>
        <p>Nome: {nome}</p>
        <button onClick={atualizarNome} className={styles.finalizado}>Mudar</button>
        <p>Idade: {idade}</p>
        <button onClick={atualizarIdade} className={styles.finalizado}>Aumentar</button>
        <p>É Falso: {eFalso ? 'Não' : 'Sim'}</p>
        <button onClick={verificarEstado} className={styles.finalizado}>Verificar</button>
        <p>Fruta secreta: {fruta}</p>
        <button onClick={verificarFruta} className={styles.finalizado}>Fruta mostrar</button>
        </>
    )
}

export default UseStateHook