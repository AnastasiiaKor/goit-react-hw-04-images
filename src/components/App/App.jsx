import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import { useState } from 'react';
import css from '../App/App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [request, setRequest] = useState('');

  const formSubmitHandler = request => {
    setRequest(request);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={request => formSubmitHandler(request)} />
      <ImageGallery value={request} />
      <ToastContainer />
    </div>
  );
}
export default App;
