import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RequestService {
    private baseUrl = 'http://localhost:3000/api/requests'; // Replace with your actual backend API URL

    constructor(private http: HttpClient) { }

    getRequests(): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}`);
    }
    getRequest(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/${id}`);
    }
    createRequest(request: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}`, request);
    }
    updateRequest(id: number, request: any): Observable<any> {
        return this.http.put<any>(`${this.baseUrl}/${id}`, request);
    }
    deleteRequest(id: number): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/${id}`);
    }
    approveRequest(id: number): Observable<any> {
        return this.http.patch<any>(`${this.baseUrl}/${id}/approve`, {});
    }
    rejectRequest(id: number): Observable<any> {
        return this.http.patch<any>(`${this.baseUrl}/${id}/reject`, {});
    }

}
