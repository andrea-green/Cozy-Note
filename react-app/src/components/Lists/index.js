//importsingle list components.


import EditListForm from "./EditListForm";
import DeleteListForm from './DeleteListForm'

export default function SingleList(){

    return (
        <div className='single-list-idx-main'>
            <div className='edit-list-idx'>
                <EditListForm />
            </div>
            <div className='delete-list-idx'>
                <DeleteListForm/>
            </div>
        </div>
    );
}
