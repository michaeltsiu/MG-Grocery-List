import React from 'react';
import ListItem from './ListItem';
import '../styling/ListDisplay.css';

const ListDisplay = (props) => {
  const items = props.items.map((item, i) => (
    <ListItem
      key={i}
      name={item}
      handleClick={props.handleClick}
      edit={props.edit}
    />
  ))

  return (
    <div className="ListDisplay">

      <ul className="ListDisplay-List">
          {items}
      </ul>
    </div>
  )
}

export default ListDisplay