import { getByRole, render, screen } from '@testing-library/react';
import { GifCard } from '../../src/components/GifCard';

describe('Test on GifCard', () => {
  const title = 'test';
  const url = 'https://url.test.com/';

  test('Must match snapshot', () => {
    const { container } = render(<GifCard title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('title must match with url', () => {
    render(<GifCard title={title} url={url} />);
    const { src, alt } = screen.getByRole('img');
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });

  test('Must show the title', () => {
    render(<GifCard title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
