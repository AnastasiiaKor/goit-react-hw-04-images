import { Component } from 'react';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { alt, min, max } = this.props;
    return (
      <>
        <img src={min} alt={alt} className={styles.ImageGalleryItem_image} />
      </>
    );
  }
}
export default ImageGalleryItem;
