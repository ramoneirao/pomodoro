import { Container } from "./components/Container"
import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu"
import { CountDown } from "./components/CountDown"

import "./style/theme.css"
import "./style/global.css"
import { DefaultInput } from "./components/DefoutInput"

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
                        <p>Ciclos</p>
                        <p> 0 0 0 0 0 0</p>
                    </div>

                    <div className="formRow">
                        <button type="submit">Enviar</button>
                    </div>

                </form>
            </Container>
        </>
    )
}
