import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllNtbksThunk } from "../../store/notebooks";
import { getNtbkThunk } from "../../store/notebook";
import { useHistory } from "react-router-dom";


export default function AllNotebooks(){
    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = (notebookId) => {
        dispatch(getAllNtbksThunk(notebookId))
        history.push(`/notebooks/${notebookId}`)
    }

    //use selector to grab all of the notebookss belonging to the current user.
    const myNotebooks = useSelector((state)=>state.notebooks.allNotebooks);
    const myNotebooksArr = Object.values(myNotebooks);


    return (
        null
        // <div>
        //     <h1>My Notebooks Here </h1>
        // </div>
    );
}
