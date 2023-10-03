import { render, screen, fireEvent } from '@testing-library/react';
import GifExpertApp from '../src/GifExpertApp';

describe('Test on GiftExpertApp', () => {
  test('Must match snapshot', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test('Must change textbox value', () => {
    render(<GifExpertApp />);
    const textBox = screen.getByTestId('categoria');
    fireEvent.input(textBox, { target: { value: 'Dragon Ball Z' } });
    expect(textBox.value).toBe('Dragon Ball Z');
  });
});
