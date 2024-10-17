# Library Management System

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
  - [Entities and Relationships](#entities-and-relationships)
  - [Functional Requirements](#functional-requirements)
  - [Non-Functional Requirements](#non-functional-requirements)
  - [Additional Features](#additional-features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Library Management System is designed to manage the books, members, and transactions within a library. It facilitates book management, member management, and the borrowing/returning process, ensuring a seamless experience for both librarians and members.

## Requirements

### Entities and Relationships

1. **Book**

   - **Attributes:**
     - Title
     - Author
     - ISBN
     - Published Year
     - Number of Copies Available
     - Genre
   - **Methods:**
     - `addCopy()`: Increases the number of copies available.
     - `removeCopy()`: Decreases the number of copies available.

2. **Member**

   - **Attributes:**
     - Member ID
     - Name
     - Contact Information
     - Membership Type (Regular, Premium)
     - Borrowed Books (array)
   - **Methods:**
     - `borrowBook(book)`: Allows the member to borrow a book.
     - `returnBook(book)`: Allows the member to return a book.
     - `getBorrowedBooks()`: Lists all currently borrowed books.

3. **Librarian**
   - **Attributes:**
     - Employee ID
     - Name
     - Contact Information
   - **Methods:**
     - `addBook(book)`: Adds a new book to the library.
     - `removeBook(book)`: Removes a book from the library.
     - `viewMembers()`: Displays all members.
     - `viewBooks()`: Displays all books in the library.

### Functional Requirements

- **Book Management:**

  - Add new books to the system.
  - Remove books from the system.
  - Update book details (title, author, etc.).
  - Search for books by title, author, or genre.

- **Member Management:**

  - Register new members.
  - Update member details (contact information, membership type).
  - View member details.
  - List all borrowed books for a member.

- **Borrowing and Returning Books:**

  - Members can borrow books if available.
  - Limit on the number of books a member can borrow.
  - Record the borrowing transaction (date borrowed, due date).
  - Members can return books, and the system updates the availability of the book.

- **Reports and Statistics:**
  - Generate reports for books borrowed by members.
  - Track overdue books and notify members.
  - Summary of books available by genre.

### Non-Functional Requirements

- **User Interface:** The system should have a simple and user-friendly interface for both members and librarians.
- **Security:** Authentication for members and librarians to access their respective features.
- **Performance:** The system should handle multiple concurrent users without significant delays.
- **Scalability:** The ability to add more books and members without a decline in performance.
- **Data Persistence:** Books and member data should be stored in a database or file system to persist across sessions.

### Additional Features (Optional)

- **Reservation System:** Members can reserve books that are currently checked out.
- **Membership Renewal:** Members can renew their memberships through the system.
- **Notifications:** Automated reminders for due dates and overdue books.
- **Search History:** Track books searched by members.
