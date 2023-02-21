import React, {useState,useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { getAllListsThunk } from "../../store/list";

export default function AllLists(){
    const dispatch = useDispatch();
    const history= useHistory();
    const user = useSelector((state)=>state.session.user);

    const myLists = useSelector((state)=>state.lists)


    return (
        <div className='all-lists-main'>

        </div>
    );
}
