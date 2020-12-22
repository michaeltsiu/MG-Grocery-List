import React, { useContext } from 'react';
import ListItem from './ListItem';
import '../styling/ListDisplay.css';
import { ItemsContext } from '../utils/Context';

const ListDisplay = () => {
  const [items] = useContext(ItemsContext);

  const products = items.map((item, i) => (
    <ListItem
      key={i}
      name={item}
      index={i}
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