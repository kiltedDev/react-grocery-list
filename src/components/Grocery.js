import React from 'react';

const Grocery = props => {

  return (
    <li><span> - {props.itemName} </span>
        <button type="button" onClick={() => { props.handleButtonClick() }}>Delete</button>
    </li>
  );
};

export default Grocery;
