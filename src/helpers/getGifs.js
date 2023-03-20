/**
 * It takes a category as a parameter, makes a request to the Giphy API, and returns an array of gifs
 * @param category - The category of gifs we want to get.
 * @returns An array of objects with the id, title and url of the gifs.
 */
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=s6wN4XDgEDB7mbFxrr071nWSePTVaCXS&q=${category}&limit=5`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  return gifs;
};
