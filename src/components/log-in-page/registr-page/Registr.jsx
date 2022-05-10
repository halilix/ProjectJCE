import { signOutUser, creatAuthUserWithEmailAndPassword, createUser } from '../../../firebase-config/firebase'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from '../../form-input/form-input-component'
import Button from '../../button/Button'
import'../LogIn.css'


const userInfo = {name:'', email:'', password:'', ConfirmPassword:'', isAdmin:false}

const Registr = () => {

  const [formInput, setFormInput] = useState(userInfo);
  const { name, email, password, ConfirmPassword, isAdmin} = formInput;
  const navigate = useNavigate();

  const change = (e) => {
    const {name, value} = e.target;
    setFormInput({...formInput,[name] : value});
  }

  const submit = async (e) =>{
    e.preventDefault();

    if(password !== ConfirmPassword){
      alert("The Password Dont match");
      return;
    }

    try{

      const { user } = await creatAuthUserWithEmailAndPassword(email, password);
      user.displayName = name;
      createUser(user, isAdmin);
      setFormInput(userInfo);
      navigate('../');
      signOutUser();
      
    }catch(error){
      if(error.code === 'auth/email-already-in-use')
        alert("user already in use");
      
    }

  }

  return (
    <form onSubmit={submit}>

      <h1>Sign Up</h1>
      
      <FormInput type="text" placeholder='Name...' value={name} name='name' onChange={change} required />

      <FormInput type="email" placeholder='Email...' value={email} name='email' onChange={change} required />

      <FormInput type="password" placeholder='Password...' value={password} name='password' onChange={change} required />

      <FormInput type="password" placeholder='Confirm Password...' value={ConfirmPassword} name='ConfirmPassword' onChange={change} required />

      <FormInput type="checkbox"
                 label="isAdmin" 
                 value={isAdmin} 
                 name='isAdmin' 
                 onChange={(e)=>{ const {name, checked} = e.target; setFormInput({...formInput,[name] : checked});}} />

      <Button type="submit" text="Sign Up" />

    </form>
  )
}

export default Registr