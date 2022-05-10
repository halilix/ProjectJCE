import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../provider/userProvider'
import { signOutUser } from '../../firebase-config/firebase'
import './nav.css'

const Nav = () => {
    const { currentUser } = useContext(userContext);
    console.log(currentUser);

    return (
        <center>
        <div dir="rtl" className="nav">
        <div className='img-container'>
                <Link to='/'>
                    <img src="logo.png" alt='לוגו יובלים' />
                </Link>
            </div>
            <div className="link-container">

  

<Link to='/' className="nav-link">
                    בית
                </Link>

                <Link to="About" className='nav-link' >
                    מי אנחנו
                </Link>
                <Link to="Events" className='nav-link' >
                    לוח ארועים
                </Link>
                <Link to="Contact" className='nav-link'>
                    צור קשר
                </Link>
         
                { currentUser && currentUser.isAdmin && <div className='nav-link' class="dropdown">
    כלים למנהל
    <div class="dropdown-content">
  <Link to="registr">רישום עובד</Link>
  <a href="https://academy.hubspot.com/">Academy</a>
  <a href="https://www.youtube.com/user/hubspot">YouTube</a>
  </div>
</div>

                }

            </div>
            {currentUser ? <Link to="" className='nav-link'  onClick={signOutUser}> יציאה </Link>
                : <Link to="login" className='nav-link' >
                    כניסת עובדים
                </Link>}
        </div >
        </center>
    )
}

export default Nav