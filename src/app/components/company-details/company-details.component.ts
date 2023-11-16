import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICompany } from '../../models/company';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent {
  @Input() company = {} as ICompany;
  toggleView: boolean = true;
  @Output() clickEvent = new EventEmitter<boolean>();

  onToggleView() {
    this.clickEvent.emit(false)
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
