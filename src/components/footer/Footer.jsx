import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { IoLogoFacebook } from 'react-icons/io'

const Footer = () => {
    return (


        <footer className='footer-container'>
            <div className='footer-top'>
                <h3>מנהל קהילתי יובלים</h3>
                <p>02-6414896</p>

                <p> info@yovalim.org.i</p>

                <p><a href='https://www.facebook.com/minhalyovalim/' target="_blank" className='facebook-link'><IoLogoFacebook />פייסבוק</a> </p>
            </div>

            <div className='footer-bot'>
                <div className="yovelim">
                    <h3>יובלים</h3>
                    <ul>
                        <li>מרכז קהילתי פיליפ לאון - צ'ילה 8</li>
                        <li>מרכז הספורט בית טיילור - זנגוויל 23</li>
                        <li>מרכז התרבות בית טיילור - זנגוויל 23</li>
                        <li>מרכז קהילתי רמת שרת-דניה - משה שרת 1</li>
                        <li>מרכז קהילתי עין-כרם - המעיין 2</li>
                        <li>מרכז קהילתי מלחה</li>
                        <li>מרכז קהילתי בית רחל - אולסוונגר 48</li>
                        <li>מרכז קהילתי הסנפלד (שטרן) - שטרן 3</li>
                    </ul>
                </div>
                <div className="extension">
                    <h3>שלוחות</h3>
                    <ul>
                        <li>מלחה</li>
                        <li>רמת שרת דניה</li>
                        <li>עין כרם</li>
                        <li>מרכז תרבות בית טיילור</li>
                        <li>מרכז ספורט בית טיילור</li>
                        <li>פיליפ לאון</li>
                        <li>בית רחל</li>
                        <li>המרכז הקהילתי עש הסנפלד</li>
                    </ul>
                </div>

                <div className="general">
                    <h3>כללי</h3>
                    <ul>
                        <Link to='/' className='footer-link'><li>בית</li></Link>
                        <Link to="About" className='footer-link'><li>מי אנחנו</li></Link>
                        <Link to="Events" className='footer-link'><li>לוח ארועים</li></Link>
                        <Link to="Contact" className='footer-link'><li>צור קשר</li></Link>
                    </ul>

                </div>
            </div>


        </footer >


    )
}

export default Footer