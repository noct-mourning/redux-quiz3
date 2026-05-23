import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, removeTask } from './features/tasks/taskSlice'
import './App.css'

function TaskInput() {
  const [text, setText] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (!text.trim()) {
      setError('! CANNOT DISPATCH EMPTY TASK')
      setTimeout(() => setError(''), 2000)
      return
    }
    dispatch(addTask(text))
    setText('')
    setError('')
  }

  return (
    <div className="input-section">
    <div className="section-label">// DISPATCH NEW TASK</div>
    <div className="input-row">
    <input
    className="task-input"
    value={text}
    onChange={e => setText(e.target.value)}
    onKeyDown={e => e.key === 'Enter' && handleAdd()}
    placeholder="ENTER TASK DESCRIPTION..."
    maxLength={80}
    />
    <button className="add-btn" onClick={handleAdd}>+ ADD</button>
    </div>
    <div className="error-line">{error}</div>
    </div>
  )
}

function TaskItem({ task, index }) {
  const dispatch = useDispatch()
  return (
    <div className="task-item">
    <span className="task-num">{String(index + 1).padStart(2, '0')}.</span>
    <span className="task-text">{task.text}</span>
    <button className="del-btn" onClick={() => dispatch(removeTask(task.id))}>DEL</button>
    </div>
  )
}

function TaskList() {
  const tasks = useSelector(state => state.tasks.tasks)
  return (
    <div className="list-section">
    <div className="list-header">
    <div className="section-label">// STORE.TASKS[]</div>
    <div className="task-count">{tasks.length} TASKS</div>
    </div>
    {tasks.length === 0
      ? <div className="empty-state">// NO TASKS IN STORE</div>
      : tasks.map((task, i) => <TaskItem key={task.id} task={task} index={i} />)
    }
    </div>
  )
}

function App() {
  return (
    <div className="app-wrapper">
    <div className="corner tl" /><div className="corner br" />

    <div className="app-header">
    <div className="header-left">
    <div className="logo-hex"><span>RX</span></div>
    <div>
    <div className="sys-label">// FINALS QUIZ #3</div>
    <div className="app-title">TASK MANAGER</div>
    </div>
    </div>
    <div className="store-badge">REDUX STORE ACTIVE</div>
    </div>

    <div className="divider" />
    <TaskInput />
    <div className="divider" />
    <TaskList />

    <div className="app-footer">
    <div className="footer-diamond" />
    <span className="footer-text">useSelector() / useDispatch() ACTIVE</span>
    <span className="footer-tag">taskSlice.reducer</span>
    </div>
    </div>
  )
}

export default App
