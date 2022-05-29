import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { userContext } from '../provider/userProvider'
import { signOutUser } from '../../firebase-config/firebase'
import Dropdown from 'react-dropdown';
import Structures from '../home-page/Structures/Structures';
import LogIn from '../log-in-page/LogIn'
import './nav.css'

const Nav = () => {
    const { currentUser } = useContext(userContext);
    const [loginPressed, setLoginPressed] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {

        if (event.value === 'ניהול משתמשים')
            navigate('./users-manage');
        else
            navigate('./events-manage');

    }

    return (
        <>
            <div className="nav">

                <div className='img-container'>
                    <Link to='/'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/test-1-9bda5.appspot.com/o/images%2Flogo.png?alt=media&token=a27526d9-8068-4203-9c2d-88571200ea17" alt='לוגו יובלים' />
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
                    {currentUser && (currentUser.isAdmin || currentUser.BuildManager) &&

                        <Dropdown
                            className='nav-link'
                            aria-expanded="false"
                            placeholder="אפשרויות מנהל"
                            onChange={handleChange}
                            options={[{ label: 'ניהול משתמשים', value: 'ניהול משתמשים' },
                            { lable: 'ניהול אירועים', value: 'ניהול אירועים' }]}
                        />}

                </div>

                {currentUser ? <Link to="" className='nav-link' onClick={signOutUser}> יציאה </Link>
                    : <span onClick={() => setLoginPressed(!loginPressed)} className='nav-link'>
                        כניסת עובדים
                    </span>}

            </div >

            {loginPressed && <LogIn setlogin={setLoginPressed} />}

            <div className="facilities-link">
                <Structures />
            </div>

        </>
    )
}

export default Nav