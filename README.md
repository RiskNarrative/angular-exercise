## Goal
Create a company search application using Angular 7 or above. 

## Criteria
* A user can search for a company by name or company number
* The result of the search is displayed
* The user can click on any company to view its details

## Optional
* Use Material Design or Bootstrap for styling
* Provide input validation
* Restrict access to details page (you may mock the user authentication)
* Implement paging of the result

## Technologies
* Use Stylus, SASS, LESS or plain CSS for style sheets
* Use any NPM components you feel is appropriate for the task

## Example API Requests
**Search for Company:**  
`https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Search?Query={search_term}`

**Get Company Officers:**  
`https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Officers?CompanyNumber={number}`

## API documentation

**Authentication:**\
Use the API key provided in your request header when calling the endpoints. 
Example: curl -s -H 'x-api-key: xxxxxxxxxxxxx' "https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Officers?CompanyNumber=10241297"

*API credentials will be provided seperately*

## Wireframes

![Wireframe](https://raw.githubusercontent.com/TruNarrative/angular-exercise/master/CompanySearch.jpeg)
