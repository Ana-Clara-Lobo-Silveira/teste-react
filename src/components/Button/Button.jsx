import styles from "./button.module.css"

function Button({texto='vazio'}){
    return(
        <>
                <button className={styles.buttonD}>{texto}</button>
        </>
    )
}

export default Button