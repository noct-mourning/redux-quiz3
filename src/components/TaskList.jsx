import { useSelector, useDispatch } from 'react-redux'
import { removeTask } from '../features/tasks/taskSlice'

function TaskItem({ task, index }) {
    const dispatch = useDispatch()

    return (
        <div>
        <span>{index + 1}. {task.text}</span>
        <button onClick={() => dispatch(removeTask(task.id))}>Delete</button>
        </div>
    )
}

function TaskList() {
    const tasks = useSelector(state => state.tasks.tasks)

    if (!tasks.length) return <p>No tasks yet.</p>

        return (
            <div>
            {tasks.map((task, index) => (
                <TaskItem key={task.id} task={task} index={index} />
            ))}
            </div>
        )
}

export default TaskList
