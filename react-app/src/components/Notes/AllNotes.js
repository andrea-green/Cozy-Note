import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'

export default function AllNotes(){
    const dispatch = useDispatch();
    const state = useSelector(state => state.notes);
}
