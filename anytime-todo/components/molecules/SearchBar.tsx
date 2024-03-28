import { IoSearch } from 'react-icons/io5'
import Link from 'next/link'
import React from 'react'

interface SearchBarProps {
	searchQuery: string
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>
	onSearch: (e: React.FormEvent<HTMLFormElement>) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, onSearch }) => {
	return (
		<div className="d-flex flex-column flex-md-row gap-2 gap-md-5 align-items-center">
			{/* görev ekle  */}
			<Link href="/add" className=" btn btn-primary text-white">
				Yeni Görev Ekle
			</Link>

			{/* arama çubuğu */}
			<form className="d-flex gap-1 align-items-center" onSubmit={onSearch}>
				<input
					type="text"
					className="form-control"
					placeholder="Ara..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<button type="submit" className="btn btn-primary">
					<IoSearch />
				</button>
			</form>
		</div>
	)
}

export default SearchBar
