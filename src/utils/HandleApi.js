import axios from 'axios'

const baseURL = "https://todo-backend-xfyu.onrender.com"

const getAllToDo = (setToDo) => {
    axios
        .get(baseURL)
        .then(({ data }) => {
            console.log(data);
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseURL}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err))

}

const updateTodoo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
        .post(`${baseURL}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err))

}

const deleteTodoo = (_id, setToDo) => {
    axios
        .post(`${baseURL}/delete`, { _id })
        .then((data) => {
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err))

}
export { getAllToDo, addToDo, updateTodoo, deleteTodoo }