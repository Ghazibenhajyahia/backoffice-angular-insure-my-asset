import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../services/user.service/request.service';
// import { ToastrService } from 'ngx-toastr';
// import { take } from 'rxjs/operators';
// import { roles } from 'src/app/_constants/roles';
// import { User } from 'src/app/_models/user';
// import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  // Constantes
  // selectedRoles = roles;

  p: number = 1; // current page number
  linesPerPage = 15; // Nombre de lignes par page dans le tableau
  isMobile: boolean = false;
  requests: any[] = [];

  // displayUsers: any[] = [];
  // users: User[] = [];

  viewRequestDetails(requestId: number) {
    // Implementation of the method
    // You can access the requestId parameter and perform any necessary actions
    this.router.navigate(['/dashboard/request-details', requestId]);
    console.log('Request ID: ' + requestId);

  }
  selectedRoleValue: string = '';
  // request: any = {
  //   id: 0,
  //   type: '',
  //   title: '',
  //   description: '',
  //   status: '',
  //   userId: 0,
  //   contractId: 0,
  //   createdAt: '',
  //   updatedAt: '',
  // };


  constructor(
    private requestService: RequestService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getRequests();
  }

  // register() {
  //   if (this.isFormValid()) {
  //     this.accountService.register(this.user).pipe(take(1)).subscribe({
  //       next: response => {
  //         console.log(response);
  //         this.getUsers();
  //         this.cancel();
  //       },
  //       error: error => {
  //         console.log(error);
  //         this.toastr.error(error.error);
  //       }
  //     });
  //   }
  // }

  getRequests() {
    this.requestService.getRequests().subscribe({
      next: response => {
        this.requests = response.requests;
        // this.displayUsers = this.users.slice(0, this.linesPerPage);

        if (window.screen.width <= 768) { // 768px portrait
          this.isMobile = true;
        }
        if (response.status == 200) {
          console.log(response + 'Ena El response ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ');
          this.router.navigate(['/requests']);
        }

      },
      error: error => {
        console.log(error);
      }
    });
  }


  // cancel() {
  //   this.request = {
  //     id: 0,
  //     type: '',
  //     title: '',
  //     description: '',
  //     status: '',
  //     userId: 0,
  //     contractId: 0,
  //     createdAt: '',
  //     updatedAt: '',
  //   };
  // }



  /**
   * Tester le remplissage des champs du formulaire.
   * @returns boolean
   */





}

