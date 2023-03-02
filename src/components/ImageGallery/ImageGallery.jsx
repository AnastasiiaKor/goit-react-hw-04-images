import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';

function ImageGallery({ items }) {
  return (
    <ul className={css.ImageGallery}>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <li key={id} className={styles.ImageGalleryItem}>
            <ImageGalleryItem
              max={largeImageURL}
              min={webformatURL}
              alt={tags.split(',')[0]}
            />
          </li>
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default ImageGallery;
