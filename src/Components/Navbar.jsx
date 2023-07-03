import styles from "../styles/Navbar.module.css"
import Link from "next/link"

export default function Navbar(){

    return(
        <nav className={styles.navbar}>
            <h1><span className={styles.poke}>Poke</span>dex</h1>

            <ul className={styles.menu}>
                <li><Link  href="/">Home</Link></li>
                <li><Link href="/about">Sobre</Link></li>
            </ul>
        </nav>
    )
}