import Link from "next/link";
import styles from "../../styles/PokemonId.module.css"
import Image from "next/image";
import Head from "next/head";

export async function getStaticPaths(){

    const maxPokemons = 251;
    const api = `https://pokeapi.co/api/v2/pokemon`;
  
    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()
  
    //params

    const paths = data.results.map((pokemon,index)=>{
        return {
            params: { pokemonId: (index +1).toString() },
        }
    })

    return {
        paths,
        fallback:false,
    }
}

export async function getStaticProps(context){
    
    const id = context.params.pokemonId;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const data = await res.json();

    return{
        props:{ pokemon: data },
    }
}



export default function Pokemon({ pokemon }){

    return(
    <div className={styles.globalContainer}>
        <Head>
            <title>{pokemon.name}</title>
        </Head>

        <div className={styles.cardContainer}>
            <Image 
                src={`/images/pokemonLogo.png`}
                width="200"
                height="70"
                alt="PokemonLogoFrom: https://www.freepnglogos.com/images/pokemon-logo-png-1428.html"
            />


            <div className={styles.imgContainer}>
                <Image 
                        src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                        width="250"
                        height="250"
                        alt = {`${pokemon.name}`}
                    />
            </div>


                <h1 className={styles.pokemonName}>{pokemon.name}</h1>
                <div className={styles.descriptionContainer}>
                    <h2>Número:</h2>
                    <p>#{pokemon.id}</p>
                    <h2>Altura:</h2>
                    <p>{pokemon.height *10} Cm</p>
                    <h2>Peso:</h2>
                    <p>{pokemon.weight / 10} Kg</p>
                    <h2>Tipo:</h2>
                        <div className={styles.typeDescription}> {pokemon.types.map((item, index)=> (
                            <p key={pokemon.id}>{item.type.name}</p>
                            ))}
                        </div>
            </div>
            
            <Link href="/"  className={styles.backButton}>
                    <span>
                        Voltar
                    </span>
                    </Link>
        </div>
    </div>
    )
}