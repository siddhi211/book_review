# Book Review Frontend

This is the React frontend for the Book Review Platform. It allows users to browse books, view details, and manage reviews.

## Features

- Browse a list of books
- Filter books by genre or author
- View book details and all reviews
- Add, edit, and delete reviews
- See average rating per book

## Prerequisites

- Node.js (v14+ recommended)
- npm

## Setup Instructions

1. **Clone the repository and navigate to the frontend:**
    ```bash
    git clone <repository-url>
    cd book-review-frontend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm start
    ```
    The app will run at [http://localhost:3000](http://localhost:3000).

4. **Connect to the backend:**
    - By default, the frontend expects the backend API at `http://localhost:8000/api/`.
    - Make sure the backend server is running.

## Project Structure

- `src/BookList.js` — Book list and filters
- `src/BookDetails.js` — Book details and reviews
- `src/App.js` — Main app component

## Notes

- You can customize the API URL in the code if your backend runs elsewhere.
- For production, build the app with `npm run build`.

---

