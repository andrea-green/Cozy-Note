//importsingle list components.


import EditListForm from "./EditListForm";
import DeleteListForm from './DeleteListForm'
import SingleListDetails from "./SingleListDetails";

export default function SingleList(){

    return (
        <div className='single-list-idx-main'>
            <div className='edit-list-idx'>
                <EditListForm />
            </div>
            <div className='delete-list-idx'>
                <DeleteListForm/>
            </div>
            <div className='single-list-details-idx'>
                <SingleListDetails /> 
            </div>
        </div>
    );
}
