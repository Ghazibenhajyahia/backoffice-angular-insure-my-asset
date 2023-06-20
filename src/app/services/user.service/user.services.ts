import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private baseUrl = 'http://localhost:3000/api/users'; // Replace with your actual backend API URL

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<any> {
        const body = { email, password };

        return this.http.post<any>(`${this.baseUrl}/login`, body);
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('email')
        console.log(!(user === null))
        return !(user === null)
    }
    logout() {
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('role')
        sessionStorage.removeItem('id')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('isLoggedIn')
    }
    addUser(email: string, role: number, firstName: String, lastName: String): Observable<any> {
        const body = { email, role, firstName, lastName };

        return this.http.post<any>(`${this.baseUrl}`, body);
    }
    getUsers(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }
    deleteUser(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
    updateUser(id: number, email: string, password: string, role: string): Observable<any> {
        const body = { email, password, role };

        return this.http.put(`${this.baseUrl}/${id}`, body);
    }
    getUser(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    getRole(): string {
        return sessionStorage.getItem('role')!;
    }
    getId(): string {
        return sessionStorage.getItem('id')!;
    }
    getToken(): string {
        return sessionStorage.getItem('token')!;
    }
    getEmail(): string {
        return sessionStorage.getItem('email')!;
    }
    getIsLoggedIn(): string {
        return sessionStorage.getItem('isLoggedIn')!;
    }
}
