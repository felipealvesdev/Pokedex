import Image from "next/image"
import styles from "../styles/Card.module.css"
import Link from "next/link"

export default function Card({pokemon}){

    return(
        <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
                <Image 
                    src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                    width="150"
                    height="150"
                    alt = {`${pokemon.name}`}
                />
            </div>
            <div className={styles.descriptionContainer}>
                <h3 className={styles.pokemonName}>{pokemon.name}</h3>
                <Link href={`/pokemons/${pokemon.id}`} className={styles.pokeLink}><span>Detalhes sobre <span>{pokemon.name}</span></span></Link>
            </div>
        </div>
    )
}