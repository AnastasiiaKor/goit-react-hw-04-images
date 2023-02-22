import { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';
import { CiSearch } from 'react-icons/ci';

class Searchbar extends Component {
  state = {
    value: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  inputHandler = event => {
    this.setState({
      value: event.currentTarget.value,
    });
  };
  submitHandler = event => {
    const { onSubmit } = this.props;
    const { value } = this.state;
    event.preventDefault();
    onSubmit(value);
  };

  render() {
    const { value } = this.state;
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.submitHandler}>
          <button
            type="submit"
            className={css.SearchForm_button}
            disabled={value ? false : true}
          >
            <CiSearch style={{ width: 35, height: 35 }} />
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.inputHandler}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
