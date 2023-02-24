import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import css from '../ImageGallery/ImageGallery.module.css';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';
import { getPictures } from 'services/getPictures';
import style from '../Button/Button.module.css';

class ImageGallery extends Component {
  state = {
    items: [],
    page: 1,
    showButton: false,
    request: '',
    showLoader: false,
  };

  static propTypes = {
    value: PropTypes.string.isRequired,
  };

  buttonСlickHandler = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { value } = this.props;
    const { page, request } = this.state;

    if (value !== prevProps.value) {
      this.setState({ request: value });
    }
    if (request !== prevState.request) {
      this.setState({
        items: [],
        showButton: false,
        page: 1,
      });
    }

    if (
      (value !== prevProps.value && page === 1) ||
      (value === prevProps.value && page !== prevState.page)
    ) {
      try {
        this.setState({ showLoader: true });
        const { hits: pictures, totalHits: total } = await getPictures(
          value,
          page
        );
        this.setState({ showLoader: false });
        if (pictures.length) {
          this.setState({ showButton: true });
          this.setState(prevState => {
            return {
              items: [...prevState.items, ...pictures],
            };
          });
        } else {
          toast.error('There are no images for your request');
          this.setState({
            items: [],
            showButton: false,
            page: 1,
          });
        }
        if (page * 12 >= total) {
          this.setState({
            showButton: false,
          });
        }
      } catch {
        console.log('Беда');
      }
    }
  }

  render() {
    const { items, showButton, showLoader } = this.state;
    return (
      <>
        {showLoader && <Loader />}
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
        {showButton && (
          <button
            className={style.Button}
            type="button"
            onClick={this.buttonСlickHandler}
          >
            Load more
          </button>
        )}
      </>
    );
  }
}

export default ImageGallery;
