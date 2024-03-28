import Buttons from '../atoms/Buttons';
import { IoSearch } from 'react-icons/io5';
import Link from 'next/link';
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
    <div className="d-flex flex-column flex-md-row gap-2 gap-md-5 align-items-center">
      <Link href="/add" className='text-white'>
        <Buttons type="submit" variant="primary">
          Görev Ekle
        </Buttons>
      </Link>

      <form className="d-flex gap-1 align-items-center" onSubmit={onSearch}>
        <TextInput
          name="search"
          placeholder="Ara..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Buttons type="submit" variant="primary">
          <IoSearch />
        </Buttons>
      </form>
    </div>
  );
};

export default SearchBar;
