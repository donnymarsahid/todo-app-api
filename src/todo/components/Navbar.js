import React from 'react';

const Navbar = ({ image }) => {
  const IMG_URL = 'http://localhost:3001/';
  return (
    <>
      <nav class=" d-flex align-items-center shadow-sm">
        <div class="container d-flex justify-content-between">
          <div class="logo d-flex align-items-center justify-content-start">
            <h2>TODO APP</h2>
          </div>
          <div class="tagline  d-flex align-items-center justify-content-center">
            <h3 class="m-0">Be a human who doesn't forget to record his activities</h3>
          </div>
          <div class="profile d-flex align-items-center justify-content-end">
            <img src={`${IMG_URL}${image}`} alt="profile" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
