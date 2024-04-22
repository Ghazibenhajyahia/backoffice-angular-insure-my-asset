import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/services/user.service/request.service';
import { UserService } from 'src/app/services/user.service/user.services';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {

  request: any = {}; // Initialize with an empty object
  user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private requestService: RequestService,
    private userService: UserService// Add the DatePipe here
  ) { }


  formatDate(date: string): string {
    return new Date(date).toLocaleDateString(); // Adjust the date format as per your requirements
  }
  ngOnInit() {
    this.getRequest();
  }

  // getRequest() {
  //   const requestId = 1; // Replace with the actual request ID

  //   this.requestService.getRequest(requestId).subscribe(
  //     (request) => {
  //       this.request = {
  //         ...request,
  //         createdAt: this.isValidDate(request.createdAt) ? new Date(request.createdAt) : null,
  //         updatedAt: this.isValidDate(request.updatedAt) ? new Date(request.updatedAt) : null,
  //       };

  //       this.getUser(this.request.userId);

  //       console.log('Request:', this.request);
  //     },
  //     (error) => {
  //       console.log('Error:', error);
  //     }
  //   );
  // }

  async getRequest() {
    try {
      const paramMap = this.activatedRoute.snapshot.paramMap;
      const requestId = paramMap?.get('id');

      if (requestId) {
        const request = await this.requestService.getRequest(+requestId).toPromise();
        this.request = request;

      } else {
        console.log('Request ID is not available.');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }

  async approveRequest() {
    try {
      const paramMap = this.activatedRoute.snapshot.paramMap;
      const requestId = paramMap?.get('id');

      if (requestId) {
        const request = await this.requestService.approveRequest(+requestId).toPromise();
        this.request = request;

      } else {
        console.log('Request ID is not available.');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }

  async rejectRequest() {
    try {
      const paramMap = this.activatedRoute.snapshot.paramMap;
      const requestId = paramMap?.get('id');

      if (requestId) {
        const request = await this.requestService.rejectRequest(+requestId).toPromise();
        this.request = request;

      } else {
        console.log('Request ID is not available.');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }





}
