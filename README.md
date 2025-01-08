Expenzo: Expense Tracker Application

Deployed Demo

Frontend: https://exp3nzo.netlify.app

Backend: https://expenzo-cypi.onrender.com

Introduction: High-Level Overview

Name:
Expenzo

Objective:
Expenzo is a web application that allows users to track their income and expenses, analyze spending habits, and manage budgets effectively. Built with the MERN stack, it provides a robust, full-stack solution for financial management.

Core Features

1. User Authentication

Sign-up/Login:
Allows users to create accounts and securely log in.

JWT Authentication:
Ensures secure user sessions.

2. Add Income and Expenses

Categorization:
Allows categorization of income (e.g., salary, bonuses) and expenses (e.g., groceries, rent, travel).

Input Fields:
Users can input the amount, category, date, and description for each transaction.

3. Dashboard

Overview:
Displays a summary of the user’s financial data, including:

Total Income

Total Expenses

Balance (Income - Expenses)

4. Expense Categories

Category Management:
Users can define and view categories such as food, transport, shopping, and utilities.

Category Breakdown:
Displays spending per category.

5. Visualization

Charts:
Provides visual insights with pie charts to show:

Spending by category.

Financial trends over time.

6. Transaction History

History Display:
Lists all transactions with details.

Filters:
Users can filter transactions by date, income, or expenses.

7. Search and Filter

Search Functionality:
Search transactions by description or category.

Advanced Filters:
Filter transactions by date range or amount.

8. Responsive Design

Optimization:
Ensures usability across mobile, tablet, and desktop devices.

Application Walkthrough

Home Page

Login/Register:
Provides options for user authentication.


Financial Summary:
Displays cards for total income, total expenses, and balance.

Charts:
Includes visual representations of income vs. expenses and category-wise breakdown.

Add Transaction Page

Transaction Form:
Users can add income or expenses by providing:

Amount,Category,Date,Description.

Technical Details

Tech Stack

Frontend:
React + Vite for a modern and responsive UI.

Backend:
Node.js and Express.js for API development.

Database:
MongoDB for scalable and efficient data storage.

Authentication:
JSON Web Tokens (JWT) for secure user sessions.

Visualization:
Chart.js for generating dynamic and interactive charts.

Repository Structure

Frontend:
Refer to the frontend branch for user interface implementation.

Backend:
Refer to the backend branch for API and server-side code.

License

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments

Chart.js for data visualization.

MongoDB, Express, React, and Node.js for the foundational technologies.
