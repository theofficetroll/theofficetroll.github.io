import React from 'react';
import './topbar.css';

// TODO
// Fix dynamics
//  Search bar wrong size
//  Spacing wrong, may need to change grouping
//  Logo through About all left-aligned
//  All others right-aligned
//  Increase space between
//  If width below a certain threshold, only show logo and search bar
// Put in a logo
// Make carets into drop-downs
// Make search clickable and so you can input data
// Make Sign Up go to an email form

const Topbar = (props) => {
  return (
    <div class="navbar">
      <div class="navbar-button">
        HumbleLogo
      </div>
      <div class="navbar-button">
        100 Projects
        <i class="caret-down">
          &#9660;
        </i>
      </div>
      <div class="navbar-button">
        Choice
      </div>
      <div class="navbar-button">
        Store
      </div>
      <div class="navbar-button">
        About
        <i class="caret-down">
          &#9660;
        </i>
      </div>
      <div class="navbar-button searchbar">
        <div id="site-search" class="search">
          {/* <input aria-label="Search" class="search-input" placeholder="Search" /> */}
          <button class="search-button search-input mag-glass" aria-label="Clear search">
            &#9906;
          </button>
        </div>
      </div>
      <div class="navbar-button login-button">
        Log In
      </div>
      <div class="navbar-button signup-button">
        Sign Up
      </div>
    </div>
  )
}

export default Topbar;
