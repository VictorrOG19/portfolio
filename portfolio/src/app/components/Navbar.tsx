"use client"
import Link from "next/link";
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
                    <Link href="/">Victor Natan</Link>
                </div>

                <div className={styles.links}>
                    <Link href="/">Início</Link>
                    <Link href="/">Sobre mim</Link>
                    <Link href="/">Contato</Link>
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
                        <Link href="/">Início</Link>
                        <Link href="/">Sobre mim</Link>
                        <Link href="/">Contato</Link>
                    </div>
                </div>
            )}
        </>
    );
}
