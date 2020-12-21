import React from 'react';
import ListItem from './ListItem';
import '../styling/ListDisplay.css';

const ListDisplay = ({ items, deleteItem, edit, setItems}) => {
  const products = items.map((item, i) => (
    <ListItem
      key={i}
      name={item}
      deleteItem={deleteItem}
      edit={edit}
      index={i}
      setItems={setItems}
      items={items}
    />
  ))

  return (
    <div className="ListDisplay">
      <ul className="ListDisplay-List">
          {products}
      </ul>
    </div>
  )
}

export default ListDisplay