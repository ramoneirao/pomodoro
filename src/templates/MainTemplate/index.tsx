import { Logo } from "../../components/Logo"
import { Container } from "../../components/Container"
import { Menu } from "../../components/Menu"
import { Footer } from "../../components/Footer"

import "../../style/global.css"
import "../../style/global.css"

type MainTemplateProps = {
    children: React.ReactNode
}

export function MainTemplate({ children }: MainTemplateProps) {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            {children}

            <Container>
                <Footer />
            </Container>
        </>
    )
}
