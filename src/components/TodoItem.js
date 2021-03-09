import { React, useState } from 'react'
import styles from './TodoItem.module.css'

const TodoItem = (props) => {
    const { id, title, done } = props.todo;
    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title)
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    const handleEditing = () => {
        setEditing(true);
    };
    const handleUpdatedDone = event => {
        if (event.key === "Enter") {
            props.setUpdate(newTitle, id)
            setEditing(false);
        } else if (event.key === "Escape") {
            setNewTitle(title);
            setEditing(false);
        }
    }

    let viewMode = {}
    let editMode = {}
    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }
    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={done}
                    onChange={() => props.handleChangeProps(id)}
                />
                <button
                    onClick={() => props.deleteTodoProps(id)}
                >Delete</button>
                <span style={done ? completedStyle : null}>
                    {title}
                </span>
            </div>
            <input
                type="text"
                style={editMode}
                className={styles.textInput}
                value={newTitle}
                onChange={e => { setNewTitle(e.target.value) }}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    )
}

export default TodoItem