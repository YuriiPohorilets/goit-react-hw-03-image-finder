import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Header, SearchForm, Input, ButtonSubmit } from './Searchbar.styled';

export class Searchbar extends React.Component {
  state = {
    query: '',
    page: 1,
  };

  handleSearchQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query.trim() === '') {
      toast.error('Please enter a search value');
      return;
    }

    onSubmit(query);
  };

  render() {
    const { handleSubmit, handleSearchQueryChange } = this;
    const { query } = this.state;

    return (
      <Header className="searchbar">
        <SearchForm onSubmit={handleSubmit} className="form">
          <Input
            onChange={handleSearchQueryChange}
            value={query}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />

          <ButtonSubmit type="submit" className="button">
            Search
          </ButtonSubmit>
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
