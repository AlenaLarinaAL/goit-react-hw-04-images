import { useState } from 'react';
import {
  SearchbarStyled,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';
import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSearchQuery = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <SearchbarStyled>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            name="query"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleSearchQuery}
          />
          <SearchButton type="submit">
            <BiSearchAlt2 />
          </SearchButton>
        </SearchForm>
      </SearchbarStyled>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
