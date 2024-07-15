import React from 'react'
import './WhatsappButton.css';
import wa from '../Images/wa.png'
import { Link } from 'react-router-dom';
const WhatsappButton = () => {
  return (
    <div className='contbutton'>
        <Link to="https://api.whatsapp.com/send?phone=918377059526">
            <img src={wa} alt='wastaap' />
        </Link>
      </div>
  )
}

export default WhatsappButton