import { useState } from 'react';
import './LandingPage.css';
import SignUpForm from '../auth/SignUpForm';

// add in the demo user here 

export default function LandingPage() {
    const [page, setPage] = useState(0);

    return (
        <h1>LandingPage</h1>
        // <div className="landing-page-container">
        //     <div className='graphics-here'>
        //         {/* graphic for landing modal here */}
        //     </div>
        //     <div className='right-side'>
        //         <div className='right-side-content'>
        //             {page === 0 &&
        //                 <div className = 'page-0'>
        //                     <h1>Find your productivity happy place! </h1>
        //                     <p>See what's possible with CozyNote.</p>
        //                 </div>
        //             }
        //             {page === 1 &&
        //                 <div className = 'page-1'>
        //                     <h1>Stay organized with a better note taking app. </h1>
        //                     <p>Capture important ideas and information in ways to help you stay productive. </p>
        //                     {/* screenshot image here  */}
        //                 </div>

        //             }

        //         </div>


        //     </div>

        // </div>
    );
}
