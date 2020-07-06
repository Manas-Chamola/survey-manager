import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Landing = ({ auth }) => {
  const display = auth ? (
    <Link to="/surveys">
      <h3>Go To Surveys</h3>
    </Link>
  ) : (
    <h3> Sigin to create new surveys </h3>
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Emaily!</h1>
      Collect feedback from users
      {display}
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Landing);
