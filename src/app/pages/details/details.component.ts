import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICompany } from '../../models/company';
import { ApiService } from '../../service/api/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  company = {} as ICompany;
  isError: boolean = false;
  toggleShowOfficers: boolean = false;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const companyId = params['companyId'];
      this.apiService.getCompany(companyId).subscribe((res: ICompany) => {

        // this can be elemenated with further refactoring when having API related to compabues
        if (!res.address) {
          this.isError = true;

        }
        this.company = res;
      }, (error) => {
        this.isError = true;
      })
    });
  }
  handleClickEvent(toggle:boolean) {
    this.toggleShowOfficers = toggle;
  }

  formatDate(inputDate: string): string {
    // Parse the input date string
    const dateParts = inputDate.split('-');
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);

    // Create a Date object
    const formattedDate = new Date(year, month - 1, day);

    // Define month names
    const monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];

    // Get day, month, and year
    const formattedDay = formattedDate.getDate();
    const formattedMonth = monthNames[formattedDate.getMonth()];
    const formattedYear = formattedDate.getFullYear();

    // Return the formatted date
    return `${formattedDay} ${formattedMonth} ${formattedYear}`;
  }
}
