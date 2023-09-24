import { LIST_TODO_COMPLETED } from "~/const";
import { LIST_TODO } from "~/mockData/task";
const { createSlice} = require("@reduxjs/toolkit");
const  initialState = {
    list_todo : LIST_TODO,
    list_todo_completed : LIST_TODO_COMPLETED
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.list_todo.push(action.payload);
        },
        completeTodo: (state, action) => {
            const { id } = action.payload;
            state.list_todo = state.list_todo.filter((todo) => todo.id !== id);
            state.list_todo_completed.push(action.payload);
        },
        unCompletedTodo: (state,action) => {
            const { id } = action.payload;
            state.list_todo_completed = state.list_todo_completed.filter((todo) => todo.id !== id);
            state.list_todo.push(action.payload);
        },
        updateTodo: (state,action) => {
            
        }
    },
});
  
export default taskSlice.reducer;
export const {addTodo , completeTodo , unCompletedTodo , updateTodo} = taskSlice.actions; 