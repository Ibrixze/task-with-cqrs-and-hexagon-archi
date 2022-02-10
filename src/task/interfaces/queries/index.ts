import { GetAllTaskQueryHandler } from "./all-task/get-all-tasks.query.handler";
import { GetTaskQueryHandler } from "./get-task/get-task.query.handler";

export const QueryHandlers = [
    GetAllTaskQueryHandler,
    GetTaskQueryHandler
]