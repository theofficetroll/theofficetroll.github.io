import React, { useEffect, useState } from 'react';
import './tier.css';

import Item from './item';

const Tier = (props) => {
  // will need to deal with items passed down by app once I start adding pieces
  // props passed down will need to include itemId as a key/value pair
  let itemsArray = []; // will be used to hold item data

  for (let key in props.items) {
    let itemId = items[key][itemId];
    if (itemId) {
      itemsArray.push(<Item key={itemId} itemDetails={items[key]} />);
    }
  }

  let { headerText } = props;

  return (
    <div className="tier">
      {headerText}
      <br />
      {/* {itemsArray} */}
      <Item key="1" itemDetails="" />
    </div>
  )
}

export default Tier;
