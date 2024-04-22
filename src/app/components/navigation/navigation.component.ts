import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { UserService } from 'src/app/services/user.service/user.services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  template: `
  <ng-lottie [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>
  `,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private userService: UserService, private router: Router) { }

  options: AnimationOptions = {
    path: '/assets/87845-hello.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

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
