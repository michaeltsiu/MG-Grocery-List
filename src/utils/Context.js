import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = (props) => {
  const list = [
    {item: 'Disposable Masks', quantity: 50},
    {item: 'Hand Sanitizer', quantity: 5},
    {item: 'Disposable Gloves', quantity: 100},
    {item: 'Toilet Paper', quantity: 10}
  ];
  const [items, setItems] = useState(list);
  const [edit, setEdit] = useState(false);

  return (
    <ItemsContext.Provider value={[items, setItems, edit, setEdit]}>
      {props.children}
    </ItemsContext.Provider>
  )
}