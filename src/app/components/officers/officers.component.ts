import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICompany } from '../../models/company';
import { ApiService } from '../../service/api/api.service';
import { IOfficer } from '../../models/officers';

@Component({
  selector: 'app-officers',
  templateUrl: './officers.component.html',
  styleUrls: ['./officers.component.scss']
})
export class OfficersComponent implements OnInit {
  toggleView: boolean = true;
  @Output() clickEvent = new EventEmitter<boolean>();
  officers = [] as IOfficer[];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const companyId = params['companyId'];
      this.apiService.getOfficers(companyId).subscribe((res: IOfficer[]) => {
        this.officers = res;
      })
    });
  }
  onToggleView() {
    this.clickEvent.emit(true)
  }
}
