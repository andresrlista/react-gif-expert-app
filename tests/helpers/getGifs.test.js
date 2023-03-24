import { getGifs } from '../../src/helpers/getGifs';

/* A test for the getGifs function. */
describe('Test on helper getGifs', () => {
  /* Testing the getGifs function. */
  test('Must return array og gifs', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });

  /* Testing the getGifs function. */
  test('Must return array of gifs', async () => {
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBeGreaterThan(0);
    const url = gifs[0].url;
    expect(gifs[0]).toMatchObject({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
