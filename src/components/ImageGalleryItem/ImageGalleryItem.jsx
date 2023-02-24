import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';
import Modal from 'components/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  static propTypes = {
    max: PropTypes.string.isRequired,
    min: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

  toggleModal = () => {
    this.setState(prevState => {
      return { showModal: !prevState.showModal };
    });
  };

  render() {
    const { alt, min, max } = this.props;
    return (
      <>
        <img
          src={min}
          alt={alt}
          className={styles.ImageGalleryItem_image}
          onClick={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal url={max} alt={alt} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}
export default ImageGalleryItem;
