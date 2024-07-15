import React from 'react'
import './Read.css';
import { Link } from 'react-router-dom';
const Read = ({id}) => {
  return (
    <div className="mainread">
         <Link to={`/articles/${id}`}>
      <button>Read more</button>
    </Link>
    </div>
  )
}

export default Read