import styles from "../styles/Home.module.css"
import Image from "next/image";

import Card from "@/Components/Card";
import Head from "next/head";

export async function getStaticProps(){

  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon`;

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item, index) =>{
    item.id = index +1;
  })

  return{
    props: {
      pokemons: data.results,
    },
  }

}




export default function Home({ pokemons }) {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>página principal</title>
        <link rel="icon" href="/images/pokebola.png"></link>
      </Head>
      
      <div className={styles.titleContainer}>
        <Image src="/images/pokemonLogo.png" width="200" height="80" alt="PokemonLogo" />
        <Image src="/images/pokebola.png" width="30" height="30" alt="pokeball"/>
      </div>
      <ul className={styles.pokemonContainer}>
        {pokemons.map((pokemon)=>(
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}

      </ul>

    </div>
  )
}
