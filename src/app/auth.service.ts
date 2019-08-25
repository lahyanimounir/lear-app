import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/internal/operators';
import { Router } from '@angular/router';
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = 'http://api.sunrise-pro.com/auth/login.php';
    constructor(private http: HttpClient,private router:Router) {
    }
    login(data): Observable<any> {
    	return this.http
      .post('http://api.sunrise-pro.com/auth/login.php',data).pipe(
            tap((result) => this.save_token(result)),
            catchError(this.handleError<any>('login'))
        );


      // .subscribe(msg => {
      // 	console.log(msg);

      // });
        // return this.http.post<any>(this.url, data).pipe(
        //     tap((result) => this.save_token(result)),
        //     catchError(this.handleError<any>('login'))
        // );
    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            return of(result as T);
        };
    }
    private save_token(data) {
        if (data.success) {
            localStorage.setItem('token', data.token);
            return;
        }
    }

    canActivate(): boolean {
	const token = localStorage.getItem('token');
	    if (token == null)   {
	        this.router.navigate(['login']);
	        return false;
	    }
	    return true;
	}
}