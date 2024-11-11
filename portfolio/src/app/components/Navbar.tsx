import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <div className={styles.circle}></div>
                <a href="/">Victor Natan</a></div>

            <div className={styles.links}>
                <a href="/">Inicio</a>
                <a href="/">Sobre mim</a>
                <a href="/">Contato</a>
            </div>
        </div>
    );
}