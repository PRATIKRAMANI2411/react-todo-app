
import { useEffect, useState } from 'react';
import './App.css';
import ToDo from './components/ToDo';
import {addaToDo, GetAllToDo, upadateToDo, deletToDo } from './utils/HandleApi';

function App() {
    const [toDo, setToDo] = useState([])
    const [text, setText] = useState("")
    const [iSUpDating, setiSUpDating] = useState(false)
    const [toDoId, settoDoId] = useState()
    useEffect(() => {
        GetAllToDo(setToDo)
    }, []);

    const upDateMode = (_id, text) =>{
        setiSUpDating(true)
        setText(text)
        settoDoId(_id)
    }

    return (
        <div className="App">
            <div className="container">
                <h1>ToDo App</h1>
                <div className="top">
                    <input type="text" placeholder="Add ToDo.."  value={text} onChange={(e) => setText(e.target.value)}/>
                    <div className="add" onClick={
                    iSUpDating
                    ? () => upadateToDo(toDoId, text, setText, setToDo, setiSUpDating) 
                    : () => addaToDo(text, setText, setToDo)}>
                    {iSUpDating ? "Update" : "Add" }
                    </div>
                </div>
                <div className="list">
                    {toDo && toDo.map((item) => {
                        return (
                            <ToDo 
                            key={item._id}
                            text={item.text}
                            upadateToDo = {() => upDateMode(item._id, item.text) }
                            deleteToDo = {() => deletToDo(item._id, setToDo) }
                             />
                        )

                    }
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
