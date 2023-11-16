import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SearchComponent } from './pages/search/search.component';
import { ApiKeyInterceptor } from './interceptors/api-key.interceptor';
import { MockInterceptor } from './service/api/mock-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchListComponent } from './pages/search-list/search-list.component';
import { CompanySearchListComponent } from './components/company-search-list/company-search-list.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailsComponent } from './pages/details/details.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { OfficersComponent } from './components/officers/officers.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchListComponent,
    CompanySearchListComponent,
    LoginComponent,
    OfficersComponent,
    DetailsComponent,
    CompanyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
