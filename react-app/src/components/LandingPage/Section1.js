import React from 'react';
import gif3 from '../graphics/gif3.gif';
import gif1 from '../graphics/gif1.gif';






export default function Section1() {
    return (
        <>
            <div className='s1-main'>
                <div className='s1-left'>
                    <h1>Why choose CozyNote?</h1>
                    <p>
                        CozyNote is a note taking app that
                        <br />
                        helps you stay organized in a
                        way that
                        <br />
                        works for you. </p>
                </div>
                <div className='s1-right'>
                    <img src={gif3} alt='gif' />
                </div>
            </div>
            <div className='s1-main'>
                <div className='s2-left'>
                    <img src={gif1} alt='gif' />
                </div>
                <div className='s2-right'>
                    <h1>Find your productivity happy place!</h1>
                    <p>See what's possible with CozyNote today.
                        <br />
                        <a href="/login">Login</a>
                        or
                        <a href="/sign-up">sign up</a>
                        to get started.
                    </p>
                </div>
            </div>
        </>
    )
}
