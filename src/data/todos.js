import { v4 as uuidv4 } from 'uuid';

const TODOS = [
    {
        id: uuidv4(),
        todo: "Buy groceries",
        isCompleted: false,
    },
    {
        id: uuidv4(),
        todo: "Shopping",
        isCompleted: false,
    },
    {
        id: uuidv4(),
        todo: "Have breakfast",
        isCompleted: false,
    },

]
export default TODOS;