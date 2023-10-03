import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import useFetchGifs from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test on GifGrid', () => {
  const category = 'One Punch';

  test('Must show loading indicator', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('One Punch'));
  });

  test('Must show one or more images', () => {
    render(<GifGrid category={category} />);
    const gifs = [
      {
        id: 'Saitama',
        title: 'One Punch Man',
        url: 'https://localhost/saitama.jpg',
      },
      {
        id: 'Goku',
        title: 'DBZ',
        url: 'https://localhost/saiyayin.jpg',
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
