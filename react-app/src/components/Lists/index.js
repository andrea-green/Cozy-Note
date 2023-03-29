// //importsingle list components.


// import EditListForm from "./EditListForm";
// import DeleteListForm from './DeleteListForm'
// import SingleListDetails from "./SingleListDetails";
// import IconModal from "../IconModal/IconModal";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getSingleListThunk } from "../../store/list";
// import { getAllTasksThunk } from "../../store/task";


// export default function SingleList() {
//     const myList = useSelector(state => state.lists.singleList);
//     // const myListTasks = useSelector(state => state.tasks.allTasks.byId);
//     const dispatch = useDispatch();
//     const { listId } = useParams();
//     console.log('myList', myList)


//     useEffect(() => {
//         dispatch(getSingleListThunk(listId))
//         dispatch(getAllTasksThunk(listId))
//     }, [dispatch, listId])

//     if (!myList.title) return null;

//     return (
//         <div className='single-list-idx-main' style={{ marginLeft: '1rem' }}>
//             <div className='edit-list-idx'>
//                 <EditListForm />
//             </div>
//             <div style={{marginTop:'1rem'}}>
//                 <IconModal
//                     modalComponent={<DeleteListForm/>}
//                     faIcon="fa-regular fa-trash-can "
//                     style={{ color: "red" }}
//                 />
//             </div>

//             {/* <div className='delete-list-idx'>
//                 <DeleteListForm/>
//             </div> */}
//             <div className='single-list-details-idx'>
//                 <SingleListDetails />
//             </div>
//         </div>
//     );
// }
