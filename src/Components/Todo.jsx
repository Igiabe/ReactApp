import Todos from "../Components/Todos";

const Todo = (onDelete) => {
    return (

        <div>


            <button onClick={onDelete}
                className="btn-danger btn-sm btn-m3"
            >Delete All</button>

        </div>
    )
}

export default Todo

