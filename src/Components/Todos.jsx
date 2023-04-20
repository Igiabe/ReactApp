import { useState } from 'react';
import Todo from '../Components/Todo'
import { convertPatternGroupsToTasks } from 'fast-glob/out/managers/tasks';
let initialTodo = [
    {
        text: 'go to work',
        id: 1,
        time: '19th June, 2022',
        status: 'urgent',
        value: 'important'
    },
    {
        text: 'go to church',
        id: 2,
        time: '19th June, 2022',
        status: 'very urgent',
        value: 'less impotrtant'
    }
]
let nextid = 0;
const Todos = () => {
    const [todos, setTodos] = useState(initialTodo)
    console.log(todos)
    const [Reminder, setReminder] = useState(false)


    const handleSubmit = (event) => {
        event.prevenDefault();

    }
    const handleChange = (event) => {

        const data = [{ ...todos }];
        console.log(data)
        const target = event.target;
        const value = target.value;
        const name = target.name;
        data[name] = value;
        setTodos(data)
    }

    const handleAdd = (todo) => {
        console.log(todo)
        setTodos([...todos, { idi: nextid++, data: todos.value }])

    }
    const handleEdit = () => {

        console.log('edited')

    }
    const handleDelete = (todo) => {
        setTodos(todos.filter((todo) => todo.id !== todo.id))
    }
    return (

        < div >
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3"><label htmlFor="Text"
                    >Text</label>
                        <input id='Text' value={todos.text}
                            type="text" className="form-control"
                            onChange={handleChange}
                        /></div>
                    <div className="form-group"><label htmlFor="Time"
                    >Day and Time</label>
                        <input id='1'
                            onChange={handleChange}
                            value={todos.Time}
                            type="text" className="form-control" /></div>

                    <div className="form-group"><label htmlFor="status">status</label>
                        <input id='2'
                            onChange={handleChange}
                            value={todos.Status}
                            type="text"
                            className="form-control" /></div>
                    <div className="form-group"><label htmlFor="value">Value</label>
                        <input id='3'
                            onChange={handleChange}
                            value={todos.Value}
                            type="text" className="form-control" /></div>
                    <div className="form-group"><label
                        htmlFor="CheckReminder">check completed</label>
                        <input id='CheckReminder'
                            value={todos.Reminder}
                            onChange={(e) => setReminder(e.target.checked)}
                            type="checkbox" className="mb-3" /></div>
                </form>
                <button onClick={() => handleAdd(...todos, { todos: todos })} className="btn-primary btn-sm">create Todo</button>


                <div>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Time</th>
                                <th>importance</th>
                            </tr>

                        </thead>
                        <tbody>
                            {todos.map(todo => (<tr key={todo.id}>

                                <td>{todo.text}</td>
                                <td>{todo.time}</td>
                                <td>{todo.completed}</td>
                                <td>{todo.status}</td>
                                <td><button onClick={() => handleEdit(todo.id)} className="btn-success btn-sm">Edit</button></td>
                                <td>
                                    <button onClick={() => handleDelete(todo.id)} className="btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>))}

                        </tbody>
                    </table>
                    {todos.length === 0 && 'Please create doto'}
                </div>

            </div>
        </div >

    )
}

export default Todos
