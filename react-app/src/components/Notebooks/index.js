
// //single notebook index
import React from "react"
import SingleNotebookDetails from "./SingleNotebookDetails"
import AllNotes2 from "../Notes/AllNotes2"


export default function SingleNotebook() {

    return (
        <div className='single-notebook-page'>
            {/* <div className='single-notebook'>
                {<SingleNotebookDetails />}
            </div> */}
            <div className='all-notes-2'>
                {<AllNotes2 />}
            </div>
        </div>
    )


}
