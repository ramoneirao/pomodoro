import { Container } from "./components/Container"
import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu"
import { CountDown } from "./components/CountDown"
import { Cycles } from "./components/Cycles"
import { DefaultInput } from "./components/DefautInput"
import { DefaultButton } from "./components/DefautButton"
import { Footer } from "./components/Footer"

import { PlayCircleIcon } from "lucide-react"

import "./style/theme.css"
import "./style/global.css"

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form className="form" action="">
                    <div className="formRow">
                        <DefaultInput id="task" type="text" labelText="Task" placeholder="Digite a próxima tarefa" />
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dolores.</p>
                    </div>
                    
                    <div className="formRow">
                        <Cycles />
                    </div>

                    <div className="formRow">
                        <DefaultButton icon={<PlayCircleIcon />} type="submit" />
                    </div>

                </form>
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    )
}
