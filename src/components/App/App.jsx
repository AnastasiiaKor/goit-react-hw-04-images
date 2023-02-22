import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import { Component } from 'react';
import css from '../App/App.module.css';

class App extends Component {
  state = {
    value: '',
  };

  formSubmitHandler = value => {
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={value => this.formSubmitHandler(value)} />
        <ImageGallery value={value} />
      </div>
    );
  }
}
export default App;
