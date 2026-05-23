import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/tasks/taskSlice'

export default function TaskInput() {
    const [text, setText] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const handleAdd = () => {
        if (!text.trim()) { setError('! EMPTY TASK — DISPATCH BLOCKED'); return }
        dispatch(addTask(text))
        setText(''); setError('')
    }

    return (
        <div>
        <input value={text} onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleAdd()}
        placeholder="ENTER TASK..." />
        {error && <p style={{color:'red'}}>{error}</p>}
        <button onClick={handleAdd}>DISPATCH TASK</button>
        </div>
    )
}
