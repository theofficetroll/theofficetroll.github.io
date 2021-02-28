import React, { useState, useEffect } from 'react';

import Topbar from './topbar';
import Navbar from './navbar';

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
    </div>
  )
}

export default App;
