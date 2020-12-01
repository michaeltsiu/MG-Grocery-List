import React from 'react';
import '../styling/ListItem.css'

const ListItem = (props) => {
  return (
    <div className="ListItem">
      <li>{props.name}</li>
      <button onClick={() => props.handleClick(props.name)}>-</button>
    </div>
  )
}

export default ListItem