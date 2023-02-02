import React,  { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllNtbksThunk } from '../../store/notebook'
// import { getAllNtbksThunk } from "../../store/notebooks";
import { getNtbkThunk } from "../../store/notebook";
import { useHistory } from "react-router-dom";
import EditNotebookForm from "./EditNotebookForm";
import DeleteNotebookForm from "./DeleteNotebookForm";
import IconModal from "../IconModal/IconModal";

export default function AllNotebooks() {
    const dispatch = useDispatch();

    const history = useHistory();
    const user = useSelector((state) => state.session.user);

    // const handleSubmit = (notebookId) => {
    //     dispatch(getAllNtbksThunk(notebookId))
    //     history.push(`/notebooks/${notebookId}`)
    // }

    const handleSubmit = (notebookId) => {
        dispatch(getNtbkThunk(notebookId))
        history.push(`/notebooks/${notebookId}`)
    }



    //use selector to grab all of the notebooks belonging to the current user.
    const myNotebooks = useSelector((state) => state.notebooks.allNotebooks.byId);
    const myNotebooksArr = Object.values(myNotebooks);

    //accordian effect
    const [active, setActive] = useState([]);
    const toggle = (index, notebookId) => {
        const activeIndices = [...active];

        if (activeIndices.includes(index)) {
            activeIndices.splice(activeIndices.indexOf(index), 1);
            setActive(activeIndices);
            return;
        }
        activeIndices.push(index);
        setActive(activeIndices);
        dispatch(getNtbkThunk(notebookId));
    };

    return (
        <div className="notebook-table">
            <table>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>CREATED BY</th>
                        <th>UPDATED </th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {myNotebooksArr.map((notebook, index) => (
                        <React.Fragment key={notebook.id}>
                            <tr
                            onClick={() => toggle(index, notebook.id)}
                            style={{ cursor: "pointer" }}
                            >
                                <td>
                                    {active.includes(index) ? (
                                        <i className="fa-solid fa-angles-right"></i>
                                    ) :(<i className="fa-solid fa-angles-down"></i>)}
                                </td>
                                <td>
                                    <i className="fa-solid fa-book-bookmark">{notebook.title}</i>
                                </td>
                                {/* need to figure out how to grab the user's name */}
                                <td>{user.username}</td>
                                <td>{notebook.created_at}</td>
                                <td>{notebook.updated_at}</td>
                                <IconModal
                                modalComponent={EditNotebookForm}
                                faIcon="fa-regular fa-pen-to-square"
                                />
                                <IconModal
                                modalComponent={DeleteNotebookForm}
                                faIcon="fa-regular fa-trash-can"
                                />
                            </tr>
                            {active.includes(index) && (
                                <tr>
                                    <td colSpan={4}>
                                        <table>
                                            <tbody>
                                                {notebook.notes?.map((note) => (
                                                    <tr key={note.id}>
                                                        <td>{note.title}</td>
                                                        <td>{note.created_at}</td>
                                                        <td>{note.updated_at}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
