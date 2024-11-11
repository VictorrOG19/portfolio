import styles from "../styles/Navbar.module.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <div className={styles.circle}></div>
                <a href="/">Victor Natan</a></div>

            <div className={styles.links}>
                <a href="/">Início</a>
                <a href="/">Sobre mim</a>
                <a href="/">Contato</a>
            </div>

            <div className={styles["mobile-button"]}>
                <button>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
