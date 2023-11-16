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

## App Structure

Followed a structure for creating the components and pages:

/auth: Contains files related to authentication and authorization (guards, interceptors, services).
/components: Divided into common components and feature-specific components.
/interceptors: Contains HTTP interceptors, made mock, api interceptor, and other interceptors like logging, error which needs to be created.
/layout: Contains layout-related components (main layout, sidebar, etc.).
/models: Defines interfaces and models used in the project.
/pages: Each subfolder represents a feature/module, and within each feature/module, you have a component and a routing module.
/services: Contains various services used in the application (mock service, API service, etc.).
/styles: Will Include SCSS files, such as variables, mixins, and a main styles file.
app.module.ts: Angular root module.
app-routing.module.ts: Handles application-level routing.
app.component.ts: Main component serving as the root component of the application.
/assets: Contains static assets (images, fonts, etc.).
/environments: Configuration files for different environments (development, production, etc.).

Added Caching functionality so that we don't load the search list again if navigating back for the same search term. Ideally done as no separate API for company details, so it can be taken from cached data with the same search query.

Also showing aspects of passing data from Router instead of requesting data again when the route is changed.

`MockdataService` for local isolated development and also for mocking the authentication. A hard refresh will log out the user, and the user would need to log in again. Thus, we can test this functionality (username: testuser, password: @@123456).

`Officers` component requests data from server on component load instead of loading it on the page. It requests data when "List Officers" is clicked.

Added proxy config to resolve issues with CORS to develop locally.

Accessibility: submitting on Enter when the search term is entered in the Input search field page 1.

## Further Improvements & Refactoring that can be done

- Adding a loading screen when data is loading or in process.
- Renaming folder service to services
- Refactor pagination functions to be made generic of Type T into its own component and service so it can be reused.
- Client-side pagination can be improved with server-side if a paginated API is available.
- We can use the Government-defined components as per their accessibility standards, which they have published.
- Creating an error handling wrapper to better handle errors graciously.
- Adding better navigation to switch between pages.
- Renaming the models as `company.model.ts` with the model extension.
- Further pages can be refactored into their specific folders for easy categorization.
- Adding unit tests for each component to test the functions.
- Adding local storage to save state if the app is hard refreshed.
- Moving mock interceptor to Interceptor folder