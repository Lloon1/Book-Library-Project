const BookCard = ({ book }) => {
return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img
        className="w-full"
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
        alt={`${book.title} cover`}
    />
    <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{book.title}</h2>
        <p className="text-gray-700 text-base">
        {book.author_name?.[0] || 'Unknown Author'}
        </p>
    </div>
    <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2">
        #{book.publisher?.[0] || 'Unknown Publisher'}
        </span>
    </div>
    </div>
);
};