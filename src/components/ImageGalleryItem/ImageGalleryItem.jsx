import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';
import Modal from 'components/Modal';

function ImageGalleryItem({ max, min, alt }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <img
        src={min}
        alt={alt}
        className={styles.ImageGalleryItem_image}
        onClick={toggleModal}
      />
      {showModal && <Modal url={max} alt={alt} onClose={toggleModal} />}
    </>
  );
}

ImageGalleryItem.propTypes = {
  max: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
