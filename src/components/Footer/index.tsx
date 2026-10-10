import styles from "./styles.module.css"

export function Footer() {
    return (
        <footer className={styles.footer}>
            <a href="">
                Entenda como o Pomodoro funciona.
            </a>
            <a>
                Chrono Pomodoro &copy; {new Date().getFullYear()}
            </a>
        </footer>
    )
}