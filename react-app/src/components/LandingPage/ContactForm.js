import React from 'react';
import { useModal } from '../../context/Modal';
import gif6 from '../graphics/gif6.gif';
// import submit from '../graphics/submit.png';


export default function ContactForm({ onFormSubmit }) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get('name');
        const message = formData.get('message');
        const emailBody = `Name: ${name}\n\nMessage: ${message}`;
        window.open(`mailto:duong.andrea12@gmail.com?subject=Contact Form Submission&body=${emailBody}`);
        onFormSubmit();
    };
    const { closeModal } = useModal();

    return (
        <div className='contact-main'>
            <div className='left-side'>
                <img src={gif6} alt='gif6' />
            </div>

            <div className='right-side'>
                <div className='form-header'>
                    <h2>Contact Us </h2>
                    <button
                        type='submit'
                        onClick={closeModal}
                        style={{ cursor: 'pointer' }}
                    > X </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='contact-input'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className='contact-input2'>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className='form-submit-button'>
                        Submit
                        {/* <img src={submit} alt='submit' /> */}
                    </button>
                </form>
            </div>
        </div>
    );
}
