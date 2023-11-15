import { Component, Input } from '@angular/core';
import { ICompany } from '../../models/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-search-list',
  templateUrl: './company-search-list.component.html',
  styleUrls: ['./company-search-list.component.scss']
})
export class CompanySearchListComponent {
  @Input() companies: ICompany[] = [];
  pagedCompanies: ICompany[] = [];
  pageNumbers: number[] = [];
  currentPage = 1;
  pageSize = 5;
  totalPages = 0;
  constructor(private router: Router) { }

  navigateToCompanyDetails(companyId: string): void {
    this.router.navigate(['/company', companyId]);

  }
  ngOnInit(): void {
    this.updateCompanies();
  }

  updateCompanies(): void {
    this.pagedCompanies = this.getCompanies(this.currentPage, this.pageSize);
    this.totalPages = this.getTotalPages(this.pageSize);
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.updateCompanies();
  }
  getCompanies(page: number, pageSize: number): ICompany[] {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return this.companies.slice(startIndex, endIndex);
  }

  getTotalPages(pageSize: number): number {
    return Math.ceil(this.companies.length / pageSize);
  }
}
