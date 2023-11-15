import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { ISearchResults } from '../../models/searchResults';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environment';
import { IOfficer } from '../../models/officers';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  private cachedCompanyList = {} as {
    searchResults: ISearchResults;
    searchTerm: string;
    officers: IOfficer[];
    companyId: string;
  };



  constructor(private http: HttpClient) { }

  fetchData(searchTern: string): Observable<any> {
    if (this.cachedCompanyList && this.cachedCompanyList.searchTerm === searchTern) {
      // Return cached data if search term is the same
      return of(this.cachedCompanyList.searchResults);
    } else {
      return this.http.get(`${this.apiUrl}/Search?Query=${searchTern}`).pipe(
        map((data: any) => {
          this.cachedCompanyList.searchResults = data;
          this.cachedCompanyList.searchTerm = searchTern;

          return data;
        }),
        catchError((error) => {
          // Handle errors appropriately, e.g., log or return a default value
          console.error('Error fetching search results:', error);
          return of(null);
        })
      );
    }
  }
  // This can be replaced for the company end point
  getCompany(companyId: string): Observable<any> {
    try {
      const company = this.cachedCompanyList.searchResults.items.filter(x => x.company_number == companyId)
      return of(company[0])
    }
    catch (e) {
      return of(e)
    }

  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }

  getOfficers(companyId: string): Observable<any> {
    if (this.cachedCompanyList.officers && this.cachedCompanyList.companyId && this.cachedCompanyList.companyId == companyId) {
      // return cached data as company is same
      return of(this.cachedCompanyList.officers)
    } else {
      return this.http.get(`${this.apiUrl}/Officers?CompanyNumber=${companyId}`).pipe(
        map((data: any) => {
          this.cachedCompanyList.officers = data.items;
          this.cachedCompanyList.companyId = companyId;
          return data.items;
        }),
        catchError((error) => {
          // Handle errors appropriately, e.g., log or return a default value
          console.error('Error fetching search results:', error);
          return of(null);
        })
      );
    }
    // Return cached data if search term is the same

  }
}
