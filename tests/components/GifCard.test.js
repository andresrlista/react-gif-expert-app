import { getByRole, render, screen } from '@testing-library/react';
import { GifCard } from '../../src/components/GifCard';

describe('Pruebas en el componente GifCard', () => {
  const title = 'test';
  const url = 'https://url.test.com/';

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifCard title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('El title y url deben coincidir', () => {
    render(<GifCard title={title} url={url} />);
    const { src, alt } = screen.getByRole('img');
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });
});
