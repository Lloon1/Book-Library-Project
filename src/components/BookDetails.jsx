const BookDetails = ({ book }) => {
return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h1 className="text-3xl font-bold">{book.title}</h1>
    <p className="text-gray-700 mt-4">
        <strong>Description:</strong> {book.description || 'No description available'}
    </p>
    <div className="mt-4">
        <p><strong>Publisher:</strong> {book.publisher?.[0]}</p>
        <p><strong>ISBN:</strong> {book.isbn?.[0]}</p>
        <p><strong>Publication Date:</strong> {book.first_publish_year}</p>
        <p><strong>Pages:</strong> {book.number_of_pages_median || 'Unknown'}</p>
    </div>
    </div>
);
};