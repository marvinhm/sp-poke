import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <div className="container-fluid frontPageGreen text-light p-5">
        <div className="container frontPageGreen p-5">
          <h1 className="display-4 homepage-title">Pokemon 1st Generation Encyclopideia</h1>
          <hr/>
            <p className='page-text'>Discover 151 of the Pokemon that statred it all.</p>
            <Link to="/list">
              <Button variant="outline-secondary">Enter Here</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage;