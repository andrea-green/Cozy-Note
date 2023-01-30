import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllNtbksThunk } from '../../store/notebook'
// import { getAllNtbksThunk } from "../../store/notebooks";
// import { getNtbkThunk } from "../../store/notebook";
import { useHistory } from "react-router-dom";


export default function AllNotebooks() {
    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = (notebookId) => {
        dispatch(getAllNtbksThunk(notebookId))
        history.push(`/notebooks/${notebookId}`)
    }


    //use selector to grab all of the notebooks belonging to the current user.
    const myNotebooks = useSelector((state) => state.notebooks.allNotebooks);
    const myNotebooksArr = Object.values(myNotebooks);


    return (
        <div>
            <h1>My Notebooks </h1>
            <div className="notebooks-list">
                {myNotebooksArr.map((notebook) => (
                    <div key={notebook.id} className='notebook'>
                        <button onClick={() => {
                            handleSubmit(notebook.id)
                        }}>{notebook.title}
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}
