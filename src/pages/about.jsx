import styles from "../styles/About.module.css"
import Image from "next/image"
import Head from "next/head"


export default function Home() {
    return (
      <div className={styles.aboutContainer}>
        <Head>
          <title>sobre</title>

        </Head>
        <h1>Sobre a Pokedex:</h1>
        <p>Esta PokeDex foi desenvolvida em NextJs. Praticando os conhecimentos adquiridos nas aulas do Youtube do canal hora de codar</p>
        <p>Muito obrigado por visitar minha Pokedex! Como todo desenvolvedor iniciante, também passei pelo "ritual" de criar a pokedex.</p>
        <h4>Espero que tenha gostado!</h4>

        <Image src={`https://img.pokemondb.net/artwork/large/pikachu.jpg`}
        width="400"
        height="400" 
        alt="pikachu"/>
      </div>
    )
  }