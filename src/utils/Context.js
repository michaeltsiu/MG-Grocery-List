import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = (props) => {
  // Default list of items that appear on first render
  const list = [
    {item: 'Disposable Masks', quantity: 50},
    {item: 'Hand Sanitizer', quantity: 5},
    {item: 'Disposable Gloves', quantity: 100},
    {item: 'Toilet Paper', quantity: 10}
  ];
  // useStates for handling the items and edit functionality
  const [items, setItems] = useState(list);
  const [edit, setEdit] = useState(false);

  return (
    // Values that we will eventually access are items, setItems, edit and setEdit
    <ItemsContext.Provider value={[items, setItems, edit, setEdit]}>
      {/* Give the children of this function all the props listed above */}
      {props.children}
    </ItemsContext.Provider>
  )
}