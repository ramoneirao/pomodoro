import { Heading } from "./components/Heading"

import "./style/theme.css"
import "./style/global.css"

export function App() {
    console.log("Testando console")

    return (
        <>
            <Heading>Teste de Props</Heading>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
        </>
    )
}
