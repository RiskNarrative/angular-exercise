# Lexus

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.10.

## Development Server

Run `ng serve` for a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running Unit Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Modular SCSS Files
modular SCSS files are stored under styles folder and these are imported into styles.scss

## Linting

Linting is performed using ESLint to ensure code quality and consistency.

### Run Lint

To run linting checks, execute the following command:

npm run lint
npm run lint:fix

### Criteria

- A user can search for a company by name or company number (**Completed**)
- The result of the search is displayed (**Completed**)
- The user can click on any company to view its details (**Completed**)

### Optional Requirements

- Use Material Design or Bootstrap for styling (**Completed**)
- Provide input validation (**Completed**)
- Restrict access to details page (you may mock the user authentication) (**Completed**)
- Implement paging of the result (**Completed**)

## Project Folder Structure

- **auth:** Contains files related to authentication and authorization (guards, interceptors, services).

- **components:** Divided into common components and feature-specific components.

- **interceptors:** Contains HTTP interceptors, other interceptor can be created like logger, error etc.

- **layout:** Contains layout-related components (main layout, sidebar, etc.).

- **models:** Defines interfaces and models used in the project.

- **pages:** Each subfolder represents a feature/module, and within each feature/module, you have a component and a routing module.

- **services:** Contains various services used in the application (data service, API service, etc.).

- **styles:** Includes SCSS files, such as variables, mixins, and a main styles file.

- **app.module.ts:** Angular root module.

- **app-routing.module.ts:** Handles application-level routing.

- **app.component.ts:** Main component serving as the root component of the application.

- **assets:** Contains static assets (images, fonts, etc.).

- **environments:** Configuration files for different environments (development, production, etc.).



# App Process Company Search and Details Viewer

## Overview

This application facilitates the search for company details by providing the ability to search for a company using its name or number. Users can further click on a specific company to access detailed information.

## Authentication

If the user is not signed in, the application will prompt them to sign in before allowing access to detailed company information. For testing purposes, you can use the following sign-in credentials:


## Usage

1. **Search for a Company:**
   - Enter the company name or number in the search bar.

2. **View Company Details:**
   - Click on a company to access its detailed information.

3. **Sign In:**
   - If the user is not signed in, they will be prompted to sign in.

4. **Access Restricted Features:**
   - Once signed in, the application will remember the user's authentication status and will not prompt for sign-in again.

## Sign-In Credentials (For Testing)

- **Username:** testuser
- **Password:** @@123456

**Note:** These credentials are provided for testing purposes only.

Feel free to customize the instructions and details based on your application's specific features and requirements.


## Further Improvements & Refactoring that can be done

- Writing unit tests for each component to test the functions.
- Adding a loading screen when data is loading or in process.
- Renaming folder service to services
- Refactor pagination functions to be made generic of Type T into its own component and service so it can be reused.
- Client-side pagination can be improved with server-side if a paginated API is available.
- We can use the Government-defined components as per their accessibility standards, which they have published.
- Creating an error handling wrapper to better handle errors graciously.
- Adding better navigation to switch between pages.
- Renaming the models as `company.model.ts` with the model extension.
- Further pages can be refactored into their specific folders for easy categorization.
- Adding local storage to save state if the app is hard refreshed.
- Moving mock interceptor to Interceptor folder

# Application Development Overview

## Data Handling Strategies

### 1. Data Mocking for Development

To facilitate local isolated development and mock authentication, the application utilizes the `MockdataService`. This service provides a simulated environment for testing authentication functionality. A hard refresh will log out the user, requiring a new login. For testing purposes, the provided credentials are:
- **Username:** testuser
- **Password:** @@123456

### 2. Efficient Data Loading

The `Officers` component optimizes data loading by making a server request only when necessary. Instead of loading data on page load, the component requests data specifically when the "List Officers" action is triggered. This approach enhances performance by minimizing unnecessary data fetches.

### 3. Persistent Authentication State

The application maintains a persistent authentication state for users. Even after a hard refresh, the user remains authenticated. This behavior allows for thorough testing of login and logout functionality.

## Development Environment Configuration

### 1. CORS Issue Resolution

To address CORS issues during local development, a proxy configuration has been added. This resolves challenges related to Cross-Origin Resource Sharing (CORS) and ensures smooth communication between the application and the server.

## Accessibility Enhancement

### 1. Improved Accessibility Features

In order to enhance accessibility, the application supports submitting the search term by pressing the "Enter" key when focused on the input search field on page 1. This feature ensures a seamless experience for users relying on assistive technologies.

## Usage Instructions

Ensure to follow these guidelines for an optimal development experience. Refer to the sections above for specific details on each aspect.


