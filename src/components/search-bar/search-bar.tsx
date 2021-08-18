import React, { useState } from 'react';
import classes from './search-bar.module.pcss';

interface SearchBarProps {
  onSubmit: (search: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [search, setSearch] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  return (
    <div className={classes.searchBar}>
      <form onSubmit={handleSubmit}>
        <div className={classes.search}>
          <input
            className={classes.searchInput}
            type="text"
            value={search}
            placeholder="hero"
            onInput={handleSearch}
          />
          <button className={classes.searchButton} type="submit">
            search
          </button>
        </div>
      </form>
    </div>
  );
};
