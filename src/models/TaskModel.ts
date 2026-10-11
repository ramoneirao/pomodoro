import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
    id: string
    name: string
    duration: string
    startDate: number;
    completDate: number | null;
    interruptedDate: number | null;
    type: keyof TaskStateModel['config'];

}