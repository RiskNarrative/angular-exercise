import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  {
  searchQuery: string = '';
  isInvalid: boolean = false;

  constructor(private router: Router) {}


  fetchCompanies() {
 // Reset the validation state
 this.isInvalid = false;

 if (this.searchQuery.trim() !== '') {
   // Navigate to the search-details page with the search term in the query string
   this.router.navigate(['/searchlist'], { queryParams: { query: this.searchQuery } });
 } else {
   // Display an error message and apply Bootstrap validation classes
   this.isInvalid = true;
 }
  }
}
