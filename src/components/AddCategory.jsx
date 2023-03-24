import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * It's a form that takes a value from an input and passes it to a callback function
 * @returns A form with an input
 */
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
    <form onSubmit={onSubmit} aria-label='form'>
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

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
