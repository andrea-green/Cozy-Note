import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import './DemoStyling.css'
import { useHistory } from "react-router-dom";

export default function DemoUser() {
  const dispatch = useDispatch();
  const history = useHistory()
  const [email] = useState('demo@aa.io');
  const [password] = useState('password');
  // const [errors, setErrors] = useState([]);
  // const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(login(email, password))
    history.push('/home')

  };

  return (
    <button className='demo-user' onClick={handleSubmit}>
      <div>Demo User</div>
    </button>
  );
}
