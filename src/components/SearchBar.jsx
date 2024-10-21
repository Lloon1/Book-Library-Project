import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
const [query, setQuery] = useState('');

const handleSearch = () => {
    if (query) {
    onSearch(query);
    }
};

return (
    <div className="flex">
    <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 rounded-l-md border-2 border-blue-600 focus:outline-none"
    />
    <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-r-md"
    >
        Search
    </button>
    </div>
);
};