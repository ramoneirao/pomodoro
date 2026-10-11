import { MainTemplate } from "../../../templates/MainTemplate"
import { CountDown } from "../../CountDown"
import { MainForm } from "../../MainForm"
import { Container } from "../../Container"

export function Home( ) {
    return (
        <MainTemplate>
            <Container>
                <CountDown />
            </Container>

            <Container>
                <MainForm />
            </Container>
            
        </MainTemplate>
    )
}
