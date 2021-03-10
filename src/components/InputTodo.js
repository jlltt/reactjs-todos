import { React, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'

const InputTodo = props => {
    const [title, setTitle] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (title.trim()) {
            props.addTodoProps(title);
            setTitle('');
        } else {
            alert('Please input something!');
        }
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                name='title'
                className='input-text'
                type='text'
                placeholder='Add Todo...'
                value={title}
                onChange={e => { setTitle(e.target.value) }}
            />
            <button className="input-submit">
                <FaPlusCircle />
            </button>
        </form>
    )
}

export default InputTodo