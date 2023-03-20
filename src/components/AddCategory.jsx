import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [categoryValue, setCategoryValue] = useState('');

  const onInputChangeCategory = ({ target }) => {
    setCategoryValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (categoryValue.trim().length <= 1) return;
    onNewCategory(categoryValue.trim());
    setCategoryValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name='categpria'
        id='categoria'
        type='text'
        value={categoryValue}
        placeholder='Burscar gifs...'
        onChange={onInputChangeCategory}
      ></input>
    </form>
  );
};
