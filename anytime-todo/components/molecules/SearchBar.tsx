import Button from '../atoms/Button';
import React from 'react';
import TextInput from '../atoms/TextInput';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  onSearch
}) => {
  return (
    <form className="d-flex gap-1 align-items-center" onSubmit={onSearch}>
      <TextInput
        name="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
       
        
      />
      <Button type="submit" variant="success">Ara</Button>
    </form>
  );
};

export default SearchBar;
