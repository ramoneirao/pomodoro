import { Heading } from "./components/Heading"

import "./style/theme.css"
import "./style/global.css"
import { TimerIcon } from "lucide-react"

export function App() {
    return (
        <>
            <Heading>
                Olá mundo! 
                <button>
                    <TimerIcon />
                </button>
            </Heading>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, quisquam. 
                    Dolor inventore corrupti facilis perspiciatis sint rem unde! 
                    Harum eaque architecto atque ex, dignissimos officiis natus sequi laudantium recusandae dicta?
                </p>
        </>
    )
}
