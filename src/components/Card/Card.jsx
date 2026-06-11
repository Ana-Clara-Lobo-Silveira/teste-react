import styles from "./card.module.css"

function Card(imagem='https://placehold.co/400', nome='Nome', curso='Nenhum'){
    return(
        <>
        <div className={styles.card}>
            <img src={imagem}/>
            <h2>{nome}</h2>
            <p>Curso: {curso} </p>
        </div>
        </>
    )
}

export default Card