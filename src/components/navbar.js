import React, { useEffect, useState } from 'react';
import './navbar.css';

import CountdownNumber from './countdownNumber.js';

// TODO
// Replace B with bell icon
// Figure out what to replace tier costs with
// Once other areas are opened up, add function to move to that part of the page



const Navbar = (props) => {

  let { countdown } = props;
  const days = Math.floor(countdown / 86400);
  countdown -= days * 86400;
  const hours = Math.floor(countdown / 3600);
  countdown -= hours * 3600;
  const minutes = Math.floor(countdown / 60);
  countdown -= minutes * 60;
  const seconds = countdown;

  return (
    <div id="navbar" className="moving-navbar">
      <div id="bell" className="bell moving-navbar-button">
        B
      </div>
      <div className="countdown-container moving-navbar-button">
        <div id="countdown">
          <div className="days blocky-countdown">
          <div className="countdown-number">
            {days}
          </div>
            <div className="countdown-word">
              days
            </div>
          </div>
          <div className="hours blocky-countdown">
            <div className="countdown-number">
              {hours}
            </div>
            <div className="countdown-word">
              hours
            </div>
          </div>
          <div className="minutes blocky-countdown">
            <div className="countdown-number">
              {minutes}
            </div>
            <div className="countdown-word">
              min
            </div>
          </div>
          <div className="seconds blocky-countdown">
          <div className="countdown-number">
            {seconds}
          </div>
            <div className="countdown-word">
              sec
            </div>
          </div>
        </div>
      </div>
      <div id="tier1" className="cost moving-navbar-button no-style">Pay $1.00+</div>
      <div id="tier2" className="cost moving-navbar-button no-style">Pay $5.00+</div>
      <div id="tier3" className="cost moving-navbar-button no-style">Pay $25.00+</div>
      <div id="charity" className="moving-navbar-button no-style" >Charity</div>
      <div id="stats" className="moving-navbar-button no-style">Stats</div>
      <div id="pay-button" className="purchase-button button-green">Pay What You Want!</div>
    </div>
  )
}

export default Navbar;
