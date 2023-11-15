import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySearchListComponent } from './company-search-list.component';

describe('CompanySearchListComponent', () => {
  let component: CompanySearchListComponent;
  let fixture: ComponentFixture<CompanySearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySearchListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
