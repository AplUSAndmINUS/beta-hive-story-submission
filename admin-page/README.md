# Admin Page Documentation

This project is the Admin Page version of the Beta HIVE Story Submission application. It includes the necessary components and routing for the admin functionalities, as well as a 404 page for handling not found routes.

## Project Structure

- **src/pages/admin/admin.tsx**: Contains the `AdminPage` component, which serves as the main interface for admin functionalities.
- **src/pages/404/404.tsx**: Contains the `NotFound` component, displayed when a route is not found.
- **src/pages/index.tsx**: Entry point for the admin page's routing.
- **src/routes/routes.tsx**: Defines the routes for the admin page, including the admin page and the 404 page.
- **src/store/index.ts**: Sets up the Redux store for managing application state.

## Getting Started

To get started with the Admin Page project, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine.
2. **Install Dependencies**: Navigate to the `admin-page` directory and run `npm install` to install the required dependencies.
3. **Run the Application**: Use `npm start` to run the application in development mode. Open your browser and go to `http://localhost:3000` to view the Admin Page.

## Deployment

This version of the application is intended to be deployed on a WordPress site. Ensure that the necessary configurations are made to integrate with the WordPress environment.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.