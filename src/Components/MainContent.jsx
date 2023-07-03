import Footer from "./Footer"
import Navbar from "./Navbar"
import styles from "../styles/MainContent.module.css"

export default function MainContent({children}){

    return(
        <div>
            <Navbar />
                <div className={styles.container}>
                    {children}
                </div>
            <Footer />
        </div>
    )
}