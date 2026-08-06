import { useEffect, useState } from "react";
import styles from './ConsultaApi.module.css'

function ConsultaApi(){
    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState(" ")
    async function BuscarUsuarios(){
    setLoading(true)
    setErro("")
    try {
        const respostaFetch = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(respostaFetch)

        if (!respostaFetch.ok){
            if (respostaFetch.status === 500){
                throw new Error("Erro 500: Falha no banco de dados ou servidor.")
            }
            if (respostaFetch.status === 401){
                throw new Error("Erro 401: Usuário não autorizado.")
            }
            throw new Error(`Erro ${respostaFetch.status}: URL não encontrada ou inválida.`)
        }

        const dados = await respostaFetch.json();
        console.log(dados)
        setUsuarios(dados)


    } catch (error) {
        console.log(error.message)
        if (error.message === "Failed to fetch" || !navigator.onLine){
            setErro("Não é possível conectar ao servidor. Verifique a sua internet.")
        } else{
            setErro(error.message)
        }
    } finally {
        setLoading(false)
    }
    };

    return(
        <>
        <main className={styles.container}>
            <h1 className={styles.titulo}>Consulta de API</h1>
            <section className={styles.card}>
                <button className={styles.buscarButton} onClick={BuscarUsuarios} disabled={loading}>{loading ? "Buscando..." : "Consultar"}</button>
                <h2>Usuários da JSON Placeholder</h2>
                {loading && <p>Carregando usuários...</p>}
                {erro && <p className={styles.erro}>{erro}</p>}
                {!loading && !erro &&(
                    <ul className={styles.lista}>
                        {usuarios.map((usuario) => (
                            <li key={usuario.id} className={styles.item}>
                                <h3>{usuario.name}</h3>
                                <p><strong>Email: </strong> {usuario.email}</p>
                                <p><strong>Cidade: </strong> {usuario.address.city}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
        </>
    );
}
export default ConsultaApi;