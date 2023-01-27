import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editNoteThunk } from '../../store/notes';
import './DeleteNoteForm.css'


export default  function EditNoteForm(){
    const dispatch = useDispatch();
    const history = useHistory();
    const { noteId } = useParams();


    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);

    const updateTitle = (e) => setTitle(e.target.value);
    const updateContent = (e) => setContent(e.target.value);

    const note = useSelector(state => console.log('state',state));

    useEffect(() => {
        const errors=[];

        if (title.length < 1) errors.push('Title must be at least 1 characters long');
        if (content.length < 0) errors.push('Content may not be empty');

        setErrors(errors);
    },[title, content])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            content
        }

        return dispatch(editNoteThunk(payload))
            .then(() => history.push('/notes'))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }



    return null;
}
