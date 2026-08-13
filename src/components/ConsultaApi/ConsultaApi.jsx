import { useEffect, useState } from "react";
import styles from './ConsultaApi.module.css'
import Swal from 'sweetalert2'

// or via CommonJS
function ConsultaApi(){
    const [usuarios, setUsuarios] = useState([])
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState(" ")
    const AlertSucesso = () => {
        Swal.fire({
            title: "Os dados foram exibidos com Sucesso!",
            icon: "success",
            draggable: true
    })};

    const ErroURL = () =>{
        Swal.fire({
        icon: "error",
        title: "Erro",
        text: "URL inválida! Verifique o endereço novamente."
        });
    };
    const autenticacao = () => {
        Swal.fire({
            title: 'Erro 401!',
            text: 'Usuário não autorizado.',
            icon: 'error',
            confirmButtonText: 'Cool'
        });
    };
    const erroInterno = () => {
        Swal.fire({
            title: 'Erro!',
            text: 'O servidor está apresentando um problema interno',
            icon: 'error',
            confirmButtonText: 'continuar'
        });
    };

    const internet = () => {
        Swal.fire({
            title: "Erro de internet",
            text: "Não foi possivel conectar a servidor. Verifique sua internet.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Tentar novamente"
        }).then((result) => {
            if (result.isConfirmed) (
                window.location.reload()
            );
        });

    }

    async function BuscarUsuarios(){
    setLoading(true)
    setErro("")

    try {
        
        // const respostaFetch = await fetch("https://httpbin.org/status/500");
        
        const respostaFetch = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(respostaFetch)

        if (!respostaFetch.ok){
            if (respostaFetch.status === 500) {
                    throw new Error(erroInterno());
                }
            if (respostaFetch.status === 401) {
                    throw new Error(autenticacao());
                }
            throw new Error(ErroURL())
        }

        const dados = await respostaFetch.json();
        console.log(dados)

        setUsuarios(dados)
        AlertSucesso()


    } catch (error) {
        console.log(error.message)
        if (error.message === "Failed to fetch" || !navigator.onLine){
            internet()

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