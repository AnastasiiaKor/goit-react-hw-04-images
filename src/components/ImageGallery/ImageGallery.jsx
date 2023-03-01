import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import css from '../ImageGallery/ImageGallery.module.css';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css';
import { getPictures } from 'services/getPictures';
import style from '../Button/Button.module.css';

function ImageGallery({ value }) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const [request, setRequest] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);

  const buttonСlickHandler = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    setRequest(value);
    setPage(1);
    setShowButton(false);
    setItems([]);
  }, [value]);

  useEffect(() => {
    if (request !== '') {
      setShowLoader(true);
      try {
        fetch(request, page);
      } catch {
        setError(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, request]);

  useEffect(() => {
    if (page * 12 >= total) {
      setShowButton(false);
    }
  }, [page, total]);

  async function fetch(request, page) {
    const { hits: pictures, totalHits: total } = await getPictures(
      request,
      page
    );
    setTotal(total);
    setShowLoader(false);
    if (pictures.length) {
      setShowButton(true);
      setItems([...items, ...pictures]);
    } else {
      toast.error('There are no images for your request');
      setPage(1);
      setShowButton(false);
      setItems([]);
    }
  }

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
          onClick={buttonСlickHandler}
        >
          Load more
        </button>
      )}
    </>
  );
}

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ImageGallery;
