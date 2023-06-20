import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service/user.services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private userService: UserService, private router: Router) { }

  logout() {
    // Implementation of the method
    // You can perform any necessary actions
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  toggleDarkMode() {
    // Implementation of the method
    // You can perform any necessary actions
  }


}
