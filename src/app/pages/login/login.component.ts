import { Component } from '@angular/core';
import { ApiService } from '../../service/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = 'testuser';
  password: string = '@@123456';
  isInvalidPass: boolean = false;
  isInvalidUsername: boolean = false;
  isInvalidLogin: boolean = false;
  constructor(private route: ActivatedRoute, private apiService: ApiService,
    private router: Router, private authService: AuthService) { }


  onSubmit() {
    this.isInvalidLogin = false
    if (this.username == '' || this.password == '') {
      this.username == '' ? this.isInvalidUsername = true : this.isInvalidUsername = false;
      this.password == '' ? this.isInvalidPass = true : this.isInvalidPass = false;
    } else {
      this.apiService.login(this.username, this.password).subscribe(

        {
          next: () => {
            // Handle successful sign-in
            this.authService.IsloggedIn();
            // Redirect to a protected route or perform any other actions
            // Get the returnUrl from query parameter
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

            // Navigate to the returnUrl or home page
            this.router.navigate([returnUrl]);
          },
          error: (error) => {
            // Handle sign-in error
            this.isInvalidLogin = true;
            console.error('Sign-in failed:', error);
          },
          complete: () => {
            // Optionally handle completion (if needed)
          }
        }
      )

    }
  }

}
