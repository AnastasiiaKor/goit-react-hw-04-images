import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';
import { getPictures } from 'services/getPictures';

class ImageGallery extends Component {
  state = {
    items: [],
  };

  async componentDidUpdate(prevProps) {
    const { value } = this.props;
    if (value !== prevProps.value) {
      try {
        const pictures = await getPictures(value, 1);
        console.log(pictures);
        if (pictures.length) {
          this.setState(prevState => {
            return {
              items: [...prevState.items, ...pictures],
            };
          });
        }
      } catch {
        console.log('Беда');
      }
    }
  }

  render() {
    const { items } = this.state;
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
}

export default ImageGallery;
