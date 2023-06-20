import { Component } from '@angular/core';
import { UserService } from '../../services/user.service/user.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private userService: UserService, private router: Router) { }

  onSubmit(): void {
    this.userService.login(this.email, this.password).subscribe(
      response => {
        // Handle the successful login response


        if (response.user) {
          sessionStorage.setItem('email', response.user.email);
          console.log(response.user.email + ' Ena Email');
          sessionStorage.setItem('role', response.user.role);
          console.log(response.user.role + ' Ena Role ');
          sessionStorage.setItem('id', response.user.id);
          console.log(response.user.id + ' Ena ID');
          sessionStorage.setItem('token', response.token);
          console.log(response.token + ' Ena Token');
          sessionStorage.setItem('isLoggedIn', 'true');
          this.router.navigate(['/dashboard']);
        }

        // Redirect the user to the dashboard

      },
      error => {
        // Handle the login error
        console.error(error);
      }
    );
  }
}
