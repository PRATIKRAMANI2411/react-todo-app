import axios from 'axios';

const basUrl = "http://localhost:5000";

const GetAllToDo = (setToDo) => {
    axios
        .get(basUrl)
        .then(({ data }) => {
            setToDo(data)
        })
}
const addaToDo = (text, setText, setToDo) => {
    axios
        .post(`${basUrl}/save`, { text })
        .then((data) => {
            setText("")
            GetAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

const upadateToDo = (toDoId, text, setText, setToDo, setiSUpDating) => {
    axios
        .post(`${basUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setiSUpDating(false)
            GetAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

const deletToDo = (toDoId, setToDo) => {
    axios
        .post(`${basUrl}/delet`, {_id: toDoId })
        .then((data) => {
            GetAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

export { GetAllToDo, addaToDo, upadateToDo, deletToDo}