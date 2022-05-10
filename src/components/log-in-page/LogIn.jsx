import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logInWithEmailAndPassword } from '../../firebase-config/firebase'
import Button from '../button/Button'
import FormInput from '../form-input/form-input-component'
import './LogIn.css'


const LogIn = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logIn = async () => {

        try {
            const { user } = await logInWithEmailAndPassword(email, password);
            if (user)
                navigate('/')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div dir="rtl" class="main-div">
            <table>
                <tr>
                    <td>
            <form>
                <center><h1>התחברות</h1></center>
                
אימייל
<br />
                <FormInput
                    type="email"

                    value={email}
                    required
                    onChange={(e) => { setEmail(e.target.value) }} />
<br />
סיסמה
<br />
                <FormInput
                    type="password"
                   
                    value={password}
                    required
                    onChange={(e) => { setPassword(e.target.value) }} />
<center>
                <Button type='button' onClick={logIn} text="התחבר" />
</center>
            </form>
            </td>
            </tr>
            </table>
        </div>
    )
}

export default LogIn