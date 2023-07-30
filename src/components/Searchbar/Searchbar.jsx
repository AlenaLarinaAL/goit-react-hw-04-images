import { Component } from 'react';
import {
  SearchbarStyled,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';
import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    query: '',
  };

  handleSearchQuery = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <SearchbarStyled>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchInput
              name="query"
              type="text"
              autocomplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={query}
              onChange={this.handleSearchQuery}
            />
            <SearchButton type="submit">
              <BiSearchAlt2 />
            </SearchButton>
          </SearchForm>
        </SearchbarStyled>
      </>
    );
  }
}
