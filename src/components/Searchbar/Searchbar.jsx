import { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';
import { CiSearch } from 'react-icons/ci';

function Searchbar({ onSubmit }) {
  const [request, setRequest] = useState('');

  const inputHandler = ({ currentTarget }) => {
    setRequest(currentTarget.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    onSubmit(request);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={submitHandler}>
        <button
          type="submit"
          className={css.SearchForm_button}
          disabled={request ? false : true}
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
          value={request}
          name="request"
          onChange={inputHandler}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
