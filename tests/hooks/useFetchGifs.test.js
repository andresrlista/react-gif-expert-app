import { renderHook, waitFor } from '@testing-library/react';
import useFetchGifs from '../../src/hooks/useFetchGifs';

describe('Test on hook useFetchGifs', () => {
  test('Must return initial state', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch Man'));
    const { images, isLoading } = result.current;

    // asserts
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Must return an array of images, isLoading: false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch Man'));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    // asserts
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
