import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private httpClient: HttpClient ) { }

    getAll(): Observable<any> {
        return this.httpClient.get<any>(`${environment.apiUrl}/messaging`);
    }

    create(newUser): Observable<any> {
        return this.httpClient.post<any>(`${environment.apiUrl}/messaging`, {users: newUser});
    }

}
