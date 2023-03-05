import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import { useState, useEffect } from 'react';
import css from '../App/App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import { getPictures } from 'services/getPictures';
import style from '../Button/Button.module.css';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [request, setRequest] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [loader, setShowLoader] = useState(false);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);

  const formSubmitHandler = query => {
    setQuery(query);
  };

  const buttonСlickHandler = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    setRequest(query);
    setPage(1);
    setShowButton(false);
    setItems([]);
  }, [query]);

  useEffect(() => {
    async function fetch(request, page) {
      try {
        setShowLoader(true);
        const { hits: pictures, totalHits: total } = await getPictures(
          request,
          page
        );
        setTotal(total);

        if (pictures.length) {
          setShowButton(true);
          setItems(items => [...items, ...pictures]);
          return;
        }
        toast.error('There are no images for your request');
      } catch (error) {
        setError(error);
      } finally {
        setShowLoader(false);
      }
    }
    if (request) {
      fetch(request, page);
    }
  }, [page, request]);

  useEffect(() => {
    if (page * 12 >= total) {
      setShowButton(false);
    }
  }, [page, total]);

  return (
    <div className={css.App}>
      <Searchbar onSubmit={query => formSubmitHandler(query)} />
      {loader && <Loader />}
      {error ? (
        toast.error('Ooops, something went wrong')
      ) : (
        <>
          <ImageGallery items={items} />
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
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
