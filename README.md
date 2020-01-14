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

<details>
  <summary>Example Response</summary>
  
  <pre>
  {
    "page_number": 1,
    "kind": "search#companies",
    "total_results": 20,
    "items": [
        {
            "company_status": "active",
            "address_snippet": "Boswell Cottage Main Street, North Leverton, Retford, England, DN22 0AD",
            "date_of_creation": "2008-02-11",
            "matches": {
                "title": [
                    1,
                    3
                ]
            },
            "description": "06500244 - Incorporated on 11 February 2008",
            "links": {
                "self": "/company/06500244"
            },
            "company_number": "06500244",
            "title": "BBC LIMITED",
            "company_type": "ltd",
            "address": {
                "premises": "Boswell Cottage Main Street",
                "postal_code": "DN22 0AD",
                "country": "England",
                "locality": "Retford",
                "address_line_1": "North Leverton"
            },
            "kind": "searchresults#company",
            "description_identifier": [
                "incorporated-on"
            ]
        }]
  }
  </pre>
</details>

**Get Company Officers:**  
`https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Officers?CompanyNumber={number}`
<details>
  <summary>Example Response</summary>
  
  <pre>
  {
    "etag": "6dd2261e61776d79c2c50685145fac364e75e24e",
    "links": {
        "self": "/company/10241297/officers"
    },
    "kind": "officer-list",
    "items_per_page": 35,
    "items": [
        {
            "address": {
                "premises": "The Leeming Building",
                "postal_code": "LS2 7JF",
                "country": "England",
                "locality": "Leeds",
                "address_line_1": "Vicar Lane"
            },
            "name": "ANTLES, Kerri",
            "appointed_on": "2017-04-01",
            "officer_role": "director",
            "links": {
                "officer": {
                    "appointments": "/officers/4R8_9bZ44w0_cRlrxoC-wRwaMiE/appointments"
                }
            },
            "date_of_birth": {
                "month": 6,
                "year": 1969
            },
            "occupation": "Finance And Accounting",
            "country_of_residence": "United States",
            "nationality": "American"
        }]
  }
  </pre>
</details>

## API documentation

**Authentication:**\
Use the API key provided in your request header when calling the endpoints. <br> 
Example: curl -s -H 'x-api-key: xxxxxxxxxxxxx' "https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Officers?CompanyNumber=10241297"<br>

*API credentials will be provided seperately*

## Wireframes

![Wireframe](https://raw.githubusercontent.com/TruNarrative/angular-exercise/master/CompanySearch.jpeg)
