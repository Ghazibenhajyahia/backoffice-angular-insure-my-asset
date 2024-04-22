import { Component } from '@angular/core';
import { UserService } from '../../services/user.service/user.services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {



  users: any[] = [];
  user: any = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    createdAt: '',
    updatedAt: '',
  };
  // displayUsers: any[] = [];
  // linesPerPage = 15;
  // currentPage = 1;
  // totalPages = 0;
  // totalLines = 0;
  // pages: number[] = [];

  newUser: any = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  };

  openModal() {
    const modal = document.getElementById('myModal');
    console.log(modal);

    if (modal != null) {
      modal.style.display = 'block';
      modal.style.opacity = '1';
    }
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    if (modal != null) {
      modal.style.display = 'none';
      modal.style.opacity = '0';
    }
  }

  constructor(private userService: UserService, private router: Router) { }

  logout() {
    // Implementation of the method
    // You can perform any necessary actions
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  editUser(user: any) {
    this.user = user;
  }
  deleteUser(user: any) {
    this.userService.deleteUser(user.id).subscribe({
      next: () => {
        this.getUsers();
      }
    });
  }
  cancel() {
    this.user = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: '',
      createdAt: '',
      updatedAt: '',
    };
  }
  saveUser(form: NgForm) {
    if (this.user.id === 0) {
      this.userService.addUser(this.user.email, this.user.role, this.user.firstName, this.user.lastName,).subscribe({
        next: () => {
          this.getUsers();
          this.cancel();
        }
      });
    } else {
      this.userService.updateUser(this.user.id, this.user.firstName, this.user.lastName, this.user.email).subscribe({
        next: () => {
          this.getUsers();
          this.cancel();
        }
      });
    }
  }
  getUsers() {
    this.userService.getUsers().subscribe({
      next: response => {
        this.users = response.users;
        // this.displayUsers = this.users.slice(0, this.linesPerPage);  // On affiche les 15 premiers éléments


      },
      error: error => {
        console.log(error);
      }

    });
  }
  ngOnInit(): void {
    this.getUsers();
  }
  addUser() {
    this.user = this.newUser;
    console.log(this.newUser);
    this.userService.addUser(this.user.email, this.user.role, this.user.firstName, this.user.lastName).subscribe({
      next: () => {
        this.getUsers();
        this.cancel();
      }
    });
    this.closeModal();
  }
  submitForm(form: NgForm) {
    console.log(form.value);
  }

}
