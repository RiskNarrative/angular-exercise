import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api/api.service';
import { ISearchResults } from '../../models/searchResults';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  searchTerm: string = '';
  searchResults = {} as ISearchResults;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    // Subscribe to the query parameter changes
    this.route.queryParams.subscribe(params => {
      // Retrieve the search term from the query string
      this.searchTerm = params['query'];

      // Check if the search term is available
      if (this.searchTerm) {
        // Call the API service's fetchData method with the search term
        this.apiService.fetchData(this.searchTerm).subscribe(
          data => {
            data?this.searchResults = data:this.searchResults =  {} as ISearchResults;
            // Process the data as needed
          },
          error => {
            // Handle errors
            console.error(error)
          }
        );
      } else {
        // Handle the case when the search term is not available
        console.error('Search term is missing from the query string.');
      }
    });
  }

}
