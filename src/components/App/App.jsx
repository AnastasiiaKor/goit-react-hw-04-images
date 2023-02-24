import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import { Component } from 'react';
import css from '../App/App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    request: '',
  };

  formSubmitHandler = request => {
    this.setState({
      request,
    });
  };

  render() {
    const { request } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={request => this.formSubmitHandler(request)} />
        <ImageGallery value={request} />
        <ToastContainer />
      </div>
    );
  }
}
export default App;
