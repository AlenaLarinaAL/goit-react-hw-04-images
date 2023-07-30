import { Item, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, onClick }) => {
  const { webformatURL, largeImageURL, tags } = image;

  const onImgClick = () => onClick(largeImageURL);
  return (
    <Item>
      <Image
        src={webformatURL}
        alt={tags}
        onClick={onImgClick}
        loading="lazy"
      />
    </Item>
  );
};
ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
