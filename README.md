Book Review Platform
A simple full-stack Book Review platform where users can browse a list of books, view book details, and add, edit, or delete reviews for each book.

Features
Browse Books: View a list of all books with details such as title, author, genre, and published year.
Book Details: Click on a book to see its details and all reviews posted by users.
Review Management: Add, edit, or delete your reviews for any book.
See Other Reviews: View reviews posted by other users on each book.
Average Rating: See the average rating for each book.
Filter: Filter books by genre or author.

Tech Stack
Backend: Django, Django REST Framework
Frontend: React, Axios

Getting Started

Backend
1.
Clone the repository and navigate to the backend folder:
cd book-review-backend

2.
Create and activate a virtual environment:
python3 -m venv venv
source venv/bin/activate

3.
Install dependencies:
pip install -r requirements.txt

4.
Run migrations and start the server:
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

Frontend
1.
Navigate to the frontend folder:
cd ../book-review-frontend

2.
Install dependencies:
npm install

3.
Start the React development server:
npm start

API Endpoints
GET /api/books/ - List all books (supports filtering by genre/author)
GET /api/books/<id>/ - Get details for a specific book (including reviews and average rating)
POST /api/reviews/ - Add a review
PUT /api/reviews/<id>/ - Edit a review
DELETE /api/reviews/<id>/ - Delete a review

Screenshots
![image](https://github.com/user-attachments/assets/23a9161a-d87e-497d-8ff9-cc44f6eca54e)
![image](https://github.com/user-attachments/assets/a1fc7210-1bba-4634-9094-f1f33a2d935f)

