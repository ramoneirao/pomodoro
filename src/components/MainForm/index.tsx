import { PlayCircleIcon } from "lucide-react"
import { DefaultInput } from "../DefautInput"
import { DefaultButton } from "../DefautButton"
import { Cycles } from "../Cycles"

export function MainForm() {
    return (
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
    )
}