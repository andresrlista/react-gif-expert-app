import PropTypes from 'prop-types';

/**
 * It takes in an object with three properties (id, title, url) and returns a
 * div with an image and a paragraph
 * @returns A div with a class of card, an img tag with a src of url and an alt of title,
 * and a p tag with the title.
 */
export const GifCard = ({ id, title, url }) => {
  return (
    <div key={id} className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
