import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Emaily!</h1>
      Collect feedback from users
      <Link to="/surveys">
        <h3>Go To Surveys</h3>
      </Link>
    </div>
  );
};

export default Landing;
