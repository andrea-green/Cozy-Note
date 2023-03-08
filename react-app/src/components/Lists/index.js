//importsingle list components.


import EditListForm from "./EditListForm";
import DeleteListForm from './DeleteListForm'
import SingleListDetails from "./SingleListDetails";
import IconModal from "../IconModal/IconModal";

export default function SingleList() {

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
