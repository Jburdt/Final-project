import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Reviews</li>
        <li>Create Review</li>
      </ul>
    </nav>
  )
}

export default Navbar