import styles from "../styles/Footer.module.css"
import Image from "next/image"

export default function Footer(){

    return(
        <footer className={styles.footer}>
            <h2>Criado por Felipe Alves.</h2>
            <p>Você pode acessar meu portfólio:</p>
            <a href="https://felipealvesportfolio.netlify.app">Clique aqui!</a>

            <Image src="/images/pokemonLogo.png" width="150" height="50" alt="PokemonLogo"/>

        </footer>
    )
}