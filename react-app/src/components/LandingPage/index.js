import React from 'react';
import './LandingPage.css';
import noteGraphic from '../images/note-graphic.png'
import penguin from '../images/penguin.gif'



export default function LandingPage() {

    return (
        <div className='landing-page-main'>
            <div className='section-1'>
                <h1>Why choose CozyNote?</h1>
                <p style={{fontSize:'30px'}}>CozyNote is a note taking app that allows you to take notes, create notebooks, and organize your notes in a way that works for you.</p>
                <img src={noteGraphic} />
            </div>
            <div className='section-2'>
                <h1>Find your productivity happy place! </h1>
                <p style={{fontSize:'30px'}}>See what's possible with CozyNote. Sign up or login to get started. </p>
                <img src={penguin}/>
            </div>

        </div>
    );
}
