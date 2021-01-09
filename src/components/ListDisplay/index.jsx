import React, { useContext } from 'react';
import ListItem from '../ListItem';
import './ListDisplay.css';
import { ItemsContext } from '../../utils';

const ListDisplay = () => {
  const [items] = useContext(ItemsContext);
  // Function to map through all items, giving it an index to access it
  const products = items.map((item, i) => (
    <ListItem
      key={i}
      name={item}
      index={i}
    />
  ))

  return (
    <ul className="ListDisplay-List">
      {/* Returning the new product array */}
      {products}
    </ul>
  )
}

export default ListDisplay