import React, { useState } from 'react';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import './App.css';

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    genre: '',
    author: ''
  });

  const handleError = (error) => {
    setError(error.message || 'An error occurred while fetching data');
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Book Review Platform</h1>
      </header>
      
      {error && <div className="error-message">{error}</div>}
      
      <main className="main-content">
        {selectedBook ? (
          <BookDetails 
            book={selectedBook} 
            onBack={() => setSelectedBook(null)}
            onError={handleError}
          />
        ) : (
          <>
            <div className="filters">
              <input
                type="text"
                placeholder="Filter by genre..."
                onChange={(e) => setFilters({...filters, genre: e.target.value})}
              />
              <input
                type="text"
                placeholder="Filter by author..."
                onChange={(e) => setFilters({...filters, author: e.target.value})}
              />
            </div>
            <BookList 
              onSelectBook={setSelectedBook}
              onError={handleError}
              filters={filters}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
