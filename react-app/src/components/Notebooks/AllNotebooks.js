import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllNtbksThunk } from '../../store/notebook'
// import { getAllNtbksThunk } from "../../store/notebooks";
import { getNtbkThunk } from "../../store/notebook";
import { useHistory } from "react-router-dom";
import EditNotebookForm from "./EditNotebookForm";
import DeleteNotebookForm from "./DeleteNotebookForm";
import IconModal from "../IconModal/IconModal";
import OpenModalButton from "../OpenModalButton";

export default function AllNotebooks() {
    const dispatch = useDispatch();

    const history = useHistory();
    const user = useSelector((state) => state.session.user);



    const handleSubmit = (e, notebookId) => {
        e.preventDefault();

        dispatch(getNtbkThunk(notebookId))
            .then(() => { history.push(`/notebooks/${notebookId}`) })
    }


    //use selector to grab all of the notebooks belonging to the current user.
    const myNotebooks = useSelector((state) => state.notebooks.allNotebooks.byId);
    const myNotes = useSelector((state) => state.notes.allNotes);
    const myNotebooksArr = Object.values(myNotebooks);
    console.log('myNotebooksArr', myNotebooksArr)

    //accordian effect
    const [activeIndex, setActiveIndex] = useState([]);

    const toggle = (index, notebookId) => {
        const newIndex = [...activeIndex];

        if (!newIndex.includes(index)) {
            newIndex.push(index);
            setActiveIndex(newIndex);
            dispatch(getNtbkThunk(notebookId));
        }
        else {
            newIndex.splice(newIndex.indexOf(index), 1);
            setActiveIndex(newIndex);
        }
    };
    useEffect(() => {
        dispatch(getAllNtbksThunk())
    }, [myNotes])

    return (
        <div className="notebook-table">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>TITLE</th>
                        <th>CREATED BY</th>
                        <th>UPDATED </th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {myNotebooksArr.map((notebook, index) => (
                        <React.Fragment key={notebook.id}>
                            <tr>
                                <td onClick={() => toggle(index, notebook.id)} style={{ cursor: "pointer" }}>
                                    {activeIndex.includes(index) ?
                                        <i className="fa-solid fa-angles-down"></i>
                                        : <i className="fa-solid fa-angles-right"></i>}
                                </td>
                                <td>
                                    <i className="fa-solid fa-book-bookmark">{notebook.title}</i>
                                </td>

                                <td>{notebook.name}</td>
                                <td>{user.username}</td>
                                <td>{notebook.updated_at}</td>
                                <td>
                                    <OpenModalButton
                                        modalComponent={<EditNotebookForm myNotebook={notebook} />}
                                        faIcon={<i className="fa-regular fa-pen-to-square" style={{ cursor: "pointer" }} />}
                                        tr={true}

                                    />
                                    <OpenModalButton
                                        modalComponent={<DeleteNotebookForm myNotebook={notebook} />}
                                        faIcon={<i className="fa-regular fa-trash-can" style={{ cursor: "pointer" }} />}
                                        tr={true}

                                    />
                                </td>
                            </tr>
                            {activeIndex.includes(index) &&

                                <tr>
                                    <td colSpan={4}>
                                        <table>
                                            <tbody>
                                                {notebook.notes?.map((note) => (
                                                    <tr key={note.id}>
                                                        <td>
                                                            {/* <NavLink to={`/notes/${note.id}`} style={{cursor:'pointer'}} exact={true} activeClassName='active'>
                                                            {note.title}
                                                            </NavLink> */}
                                                            {note.title}
                                                        </td>
                                                        <td>{note.updated_at}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            }
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
