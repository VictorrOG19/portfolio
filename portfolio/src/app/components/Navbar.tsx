"use client"
import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { Plus } from "lucide-react";

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <div className={styles.circle}></div>
                    <a href="/">Victor Natan</a>
                </div>

                <div className={styles.links}>
                    <a href="/">Início</a>
                    <a href="/">Sobre mim</a>
                    <a href="/">Contato</a>
                </div>

                <div className={styles["mobile-button"]}>
                    <button
                        className={`${styles.icon} ${isOpen ? styles.rotate : ''}`}
                        onClick={() => setOpen(!isOpen)}
                    >
                        <Plus />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className={styles["mobile-menu"]}>
                    <div className={styles["links-mobile"]}>
                        <a href="/">Início</a>
                        <a href="/">Sobre mim</a>
                        <a href="/">Contato</a>
                    </div>
                </div>
            )}
        </>
    );
}
