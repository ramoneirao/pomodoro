import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: string | null;
    currentCycle: number;
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    }
}