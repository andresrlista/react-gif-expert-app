import React, { useState, useEffect, useMemo } from 'react';
import { GifCard } from './index';
import useFetchGifs from '../hooks/useFetchGifs';

/* A functional component that is exporting a function called GifGrid. */
export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  return (
    <>
      <h3>
        {category}
        <hr />
      </h3>
      {isLoading && <h2>Loading...</h2>}
      <div className='card-grid'>
        {images.map((image) => (
          <GifCard key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
