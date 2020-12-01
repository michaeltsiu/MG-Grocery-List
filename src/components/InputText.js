import React, { useState } from 'react';

const InputText = (props) => {
  const [value, setValue] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleSubmit(value);
      setValue('');
    }}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <button>Add</button>
    </form>
  )
}

export default InputText