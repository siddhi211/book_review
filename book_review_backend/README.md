# Book Review Backend

This is the Django REST API backend for the Book Review Platform. It manages books and user reviews.

## Features

- Store book details (title, author, genre, published year)
- Store reviews (rating out of 5, comment, timestamp)
- REST API for CRUD operations on books and reviews
- Filter books by genre or author
- Average rating per book

## Prerequisites

- Python 3.8+
- pip
- (Recommended) [virtualenv](https://docs.python.org/3/library/venv.html)

## Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd book-review-backend
    ```

2. **Create and activate a virtual environment:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

3. **Install dependencies:**
    ```bash
    pip install django djangorestframework django-cors-headers
    ```

4. **Apply migrations:**
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

5. **Create a superuser (optional, for admin access):**
    ```bash
    python manage.py createsuperuser
    ```

6. **Run the development server:**
    ```bash
    python manage.py runserver
    ```

7. **API Endpoints:**
Development server is running at - http://localhost:8000/api/ or 
 http://127.0.0.1:8000/api/

    - `GET /api/books/` — List all books (supports filtering)
    - `GET /api/books/<id>/` — Book details (with reviews)
    - `POST /api/reviews/` — Add a review
    - `PUT /api/reviews/<id>/` — Edit a review
    - `DELETE /api/reviews/<id>/` — Delete a review

## Notes

- CORS is enabled for local frontend development.
- The admin panel is available at `/admin/`.

---

