import { React } from 'react'
import { v4 as uuid } from 'uuid'
import Header from './Header'
import InputTodo from './InputTodo'
import TodosList from './TodosList'
import useLocalStorage from '../hooks/useLocalStorage'

const TodoContainer = () => {
    const [todos, setTodos] = useLocalStorage('todos', [
        { id: uuid(), title: 'good', done: false },
        { id: uuid(), title: 'bad', done: true },
        { id: uuid(), title: 'neutral', done: false },
    ])

    const delTodo = i => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== i));
    }

    const addTodo = title => {
        const newTodo = {
            id: uuid(),
            title: title,
            done: false
        };
        setTodos(prevTodos => [...prevTodos, newTodo]);
    }

    const setUpdate = (updatedTitle, i) => {
        setTodos(prevTodos =>
            prevTodos.map(todo => {
                if (todo.id === i) {
                    todo.title = updatedTitle;
                }
                return todo;
            })
        )
    }

    const handleChange = i => {
        setTodos(prevTodos => prevTodos.map(todo => {
            if (todo.id === i) {
                return {
                    ...todo,
                    done: !todo.done
                }
            }
            return todo;
        }));

    }

    return (
        <div className="container">
            <div className="inner">
                <Header />
                <InputTodo
                    addTodoProps={addTodo}
                />
                <TodosList
                    todos={todos}
                    handleChangeProps={handleChange}
                    deleteTodoProps={delTodo}
                    setUpdate={setUpdate}
                />
            </div>
        </div >
    )
}

export default TodoContainer