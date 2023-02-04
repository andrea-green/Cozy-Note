import { useState } from 'react';
import './LandingPage.css';
import SignUpForm from '../auth/SignUpForm';
import LoginForm from '../auth/LoginForm';
import DemoUser from '../Users/DemoUser';


export default function LandingPage() {
    const [page, setPage] = useState(0);

    return ( null
        // <div className='landing-page-main'>
        //     <h1>LandingPage</h1>
        //     <div className="landing-page-container">
        //         <div className='graphics-here'>
        //             {/* graphic for landing modal here */}
        //         </div>
        //         <div className='right-side'>
        //             <div className='right-side-content'>
        //                 {page === 0 &&
        //                     <div className='page-0'>
        //                         <h1>Find your productivity happy place! </h1>
        //                         <p>See what's possible with CozyNote.</p>
        //                     </div>
        //                 }
        //                 {page === 1 &&
        //                     <div className='page-1'>
        //                         <h1>Stay organized with a better note taking app. </h1>
        //                         <p>Capture important ideas and information in ways to help you stay productive. </p>
        //                         {/* screenshot image here  */}
        //                     </div>

        //                 }
        //                 {page === 2 &&
        //                     <div className='page-2'>
        //                         <h1>Get started with CozyNote today. </h1>
        //                         <div className='auth-container'>
        //                             <div className='log-in'>
        //                                 <h1>Log In </h1>
        //                                 <div>
        //                                     {<LoginForm />}
        //                                 </div>
        //                             </div>
        //                             <div className='sign-up'>
        //                                 {<SignUpForm />}
        //                             </div>
        //                             <div className='demo-login'>
        //                                 {<DemoUser />}
        //                             </div>
        //                         </div>
        //                         <div className='footer'>
        //                             <a href='https://github.com/andrea-green/Cozy-Note'>
        //                                 <i class="fa-brands fa-github"></i>
        //                             </a>
        //                             <a href='https://www.linkedin.com/in/andrea-green-201146245/'>
        //                                 <i class="fa-brands fa-linkedin"></i>
        //                             </a>
        //                         </div>

        //                     </div>
        //                 }

        //             </div>
        //             <div className='landing-nav'>
        //                 {page > 0 && page <= 2 &&
        //                     <button className='landing-arrows' onClick={() => setPage(page - 1)}>
        //                         <i class="fa-solid fa-circle-right"></i>
        //                     </button>
        //                 }
        //                 {page < 2 &&
        //                     <button className='landing-arrows' onClick={() => setPage(page + 1)}>
        //                         <i class="fa-solid fa-circle-left"></i>
        //                     </button>
        //                 }
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
