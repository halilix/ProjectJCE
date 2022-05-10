import React from 'react'
import { Link } from 'react-router-dom';
import Structures from './Structures/Structures';
import './HomePage.css'

const HomePage = () => {

  return (
    <>
      <Structures />

      <div className="home-img">
        <img src="homegallerypic.png" alt="תמונת בית" />
      </div>
    </>
  )



}

export default HomePage