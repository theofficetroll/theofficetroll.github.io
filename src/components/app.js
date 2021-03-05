import React, { useState, useEffect } from 'react';

import Topbar from './topbar';
import Navbar from './navbar';
import Tier from './tier';
import Footer from './footer';

// TODO
// Add variables holding data to be pushed to Tier
// Probably refactor to build an array of Tiers
// Refactor to use React Router to load About and other pages
//
// Charity component (can reuse Item component?) - may also be able to reuse Tier and refactor?
//  Not sure if enough differences to be worth  it
// Get Notified section (not a separate component?)
// Details component
// Top Contributors component?
// Purchase component
// Footer component

const App = (props) => {
  const today = new Date();
  const dayNum = today.getDay();
  const daysToSunday = 7 - (dayNum <7 ? dayNum : dayNum - 7);
  const sundayNoon = new Date(+today);
  sundayNoon.setDate(sundayNoon.getDate() + daysToSunday);
  sundayNoon.setHours(12,0,0,0);

  let [ allSeconds ] = useState(Math.ceil((sundayNoon - today) / 1000));
  const [ setAllSeconds ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAllSeconds(oldValue => {
        let newValue = oldValue - 1;
        return newValue;
      })
    }, 1000);
  }, []);

  return(
    <div>
      <Topbar />
      <Navbar countdown={allSeconds} />
      <Tier items="" headerText="THIS IS HEADER TEXT"/>
      <Footer />
    </div>
  )
}

export default App;
