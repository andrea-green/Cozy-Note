//importsingle list components.


import EditListForm from "./EditListForm";
import DeleteListForm from './DeleteListForm'
import SingleListDetails from "./SingleListDetails";
import IconModal from "../IconModal/IconModal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSingleListThunk } from "../../store/list";


export default function SingleList() {
    const myList = useSelector(state => state.lists.singleList);
    const dispatch = useDispatch();
    const { listId } = useParams();


    useEffect(()=>{
        dispatch(getSingleListThunk(listId))
    },[dispatch,listId])

    if (!myList.title) return null;

    return (
        <div className='single-list-idx-main'>
            <div className='edit-list-idx'>
                <EditListForm />
            </div>

            <IconModal
                modalComponent={<DeleteListForm />}
                faIcon="fa-regular fa-trash-can "
                style={{ color:"red" }}
            />

            {/* <div className='delete-list-idx'>
                <DeleteListForm/>
            </div> */}
            <div className='single-list-details-idx'>
                <SingleListDetails />
            </div>
        </div>
    );
}
