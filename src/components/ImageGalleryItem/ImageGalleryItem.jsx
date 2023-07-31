import { Item, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt, openModal }) => {
  return (
    <Item>
      <Image src={src} alt={alt} onClick={openModal} loading="lazy" />
    </Item>
  );
};
ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
