import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedFlag = false; // Replace with your actual authentication logic
  private isReloadedFlag = true;
  isAuthenticated(): boolean {
    return this.isAuthenticatedFlag;
  }

  isReloaded(): boolean {
    return this.isReloadedFlag;
  }

  IsloggedIn(): void {
    this.isAuthenticatedFlag = true;
    this.isAuthenticatedFlag = true;

  }

  logout(): void {
    this.isAuthenticatedFlag = false;
  }

}
