# Personal Finance Management App

## Overview

The Personal Finance Management App is a web application designed to help users manage their personal finances. It allows users to track their income and expenses, set financial goals, and visualize their spending with charts. The app uses React.js for the frontend, Firebase for authentication and data storage, and Redux for state management.

## Features

- **User Authentication**: Sign up, log in, and manage user accounts using Firebase Authentication.
- **Dashboard**: View a summary of income, expenses, and savings goals.
- **Transaction Management**: Add, edit, and delete transactions. Transactions can be categorized as income or expenses.
- **Budget Planning**: Set and manage budgets and financial goals.
- **Data Visualization**: View expenses and income using pie charts with Chart.js.
- **Responsive Design**: Optimized for desktop and mobile devices.

## Technologies Used

- **Frontend**: React.js, Redux, React Router, Tailwind CSS, Chart.js
- **Backend**: Firebase Authentication, Firebase Firestore for data storage
- **State Management**: Redux Toolkit

## Installation

To get started with the app, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/finance-app.git
    cd finance-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up Firebase**:
    - Create a Firebase project in the Firebase Console.
    - Configure Firebase Authentication and Firestore.
    - Create a `.env` file in the root directory and add your Firebase configuration:
      ```env
      REACT_APP_FIREBASE_API_KEY=your-api-key
      REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
      REACT_APP_FIREBASE_PROJECT_ID=your-project-id
      REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
      REACT_APP_FIREBASE_APP_ID=your-app-id
      ```

4. **Run the app**:
    ```bash
    npm start
    ```

    The app will be available at `http://localhost:3000`.

## Usage

1. **Sign Up**: Create a new account using the Sign Up page.
2. **Log In**: Access your account using the Login page.
3. **Dashboard**: After logging in, you'll be redirected to the Dashboard where you can view your financial summary and manage transactions.
4. **Manage Transactions**: Add, edit, or delete income and expense transactions.
5. **Set Goals**: Use the dashboard to set and track your financial goals.
6. **Log Out**: Click the Log Out button to exit your account.

## File Structure

- **`src/components/`**: Contains reusable components like `Dashboard`, `ChartComponent`.
- **`src/pages/`**: Contains page components for `LoginPage`, `SignupPage`, `HomePage`.
- **`src/redux/`**: Contains Redux slices and store configuration.
- **`src/firebaseConfig.js`**: Firebase configuration and initialization.
- **`src/App.js`**: Main application component with routing setup.
- **`src/index.js`**: Entry point of the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out:

- **GitHub**: [Ajit49](https://github.com/Ajit49)

