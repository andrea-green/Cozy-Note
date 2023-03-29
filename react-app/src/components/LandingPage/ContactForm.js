import React from 'react';
import { useModal } from '../../context/Modal';
import gif6 from '../graphics/gif6.gif';

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

    return (
        <div className='contact-main'>
            <div className='left-side'>
                <img src={gif6} alt='gif6' />
            </div>
            <div className='right-side'>
                <h1>Contact Us </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
