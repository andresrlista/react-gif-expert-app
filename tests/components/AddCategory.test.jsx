import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

/* Testing the AddCategory component. */
describe('Must change textbox value', () => {
  /* Testing the AddCategory component. */
  test('Test on AddCategory', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const textBox = screen.getByRole('textbox');
    fireEvent.input(textBox, { target: { value: 'Saitama' } });
    expect(textBox.value).toBe('Saitama');
  });

  test('Must call onNewCategory if input contains value', () => {
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe('Saitama');
    fireEvent.submit(form);
    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('if input is empty dont calll onNewCategory', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
