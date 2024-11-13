import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <p>Made by Victor with <i className="fa-solid fa-heart"></i> and <i className="fa-solid fa-mug-saucer"></i></p> 
            </div>
        </footer>
    );
}