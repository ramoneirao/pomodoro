import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./styles.module.css"
import { useState, useEffect } from "react"

type AvailableTheme = "dark" | "light"

export function Menu() {
    const [theme, setTheme] = useState<AvailableTheme>(() => {
        const savedTheme = localStorage.getItem("theme") as AvailableTheme | "dark"
        return savedTheme
    })

    const nextTheme = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    }

    function handleTheme(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault()

        setTheme((prevTheme) => {
            const newTheme = prevTheme === "dark" ? "light" : "dark"
            return newTheme
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <nav className={styles.menu}>

            <a className={styles.menuLink} href="#" aria-label="Ir para a Home" title="Ir para a Home"> 
                <HouseIcon />
            </a>

            <a className={styles.menuLink} href="#" aria-label="Ver o Histórico" title="Ver o Histórico"> 
                <HistoryIcon />
            </a>

            <a className={styles.menuLink} href="#" aria-label="Configurações" title="Configurações"> 
                <SettingsIcon />
            </a>

            <a 
            className={styles.menuLink} 
            href="#" 
            aria-label="Alterar o Tema" 
            title="Alterar o Tema" 
            onClick={handleTheme}> 
                {nextTheme[theme]}
            </a>

        </nav>
    )
}