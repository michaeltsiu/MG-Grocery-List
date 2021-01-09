import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import ListItem from '../ListItem';
import { ItemsContext } from '../../utils';

// Style sheet for jss
const useStyles = createUseStyles({
  List: {
    margin: 0,
    padding: 0,
  }
});

const ListDisplay = () => {
  const classes = useStyles();
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
    <ul className={classes.List}>
      {/* Returning the new product array */}
      {products}
    </ul>
  )
}

export default ListDisplay