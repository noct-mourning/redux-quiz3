import { createSlice } from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'tasks',
    initialState: { tasks: [] },
    reducers: {
        addTask: (state, action) => {
            if (!action.payload.trim()) return
                state.tasks.push({ id: Date.now(), text: action.payload.trim() })
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(t => t.id !== action.payload)
        }
    }
})

export const { addTask, removeTask } = taskSlice.actions
export default taskSlice.reducer
