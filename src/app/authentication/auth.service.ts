import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { userInterface } from '../datamodel/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3001/user';

  constructor(private http: HttpClient) {}

  // Fetch by email only, then verify password locally
  login(email: string, password: string): Observable<userInterface | null> {
    const params = new HttpParams()
      .set('email', email.trim().toLowerCase()) // normalize email
      .set('_limit', 1);                         // only need 1 user

    return this.http.get<userInterface[]>(this.apiUrl, { params }).pipe(
      map(users => {
        const user = Array.isArray(users) && users.length ? users[0] : null;
        if (!user) return null;

        // If your db.json stores email lowercase, normalize here too:
        const emailsMatch =
          (user.email || '').toLowerCase() === email.trim().toLowerCase();

        const passwordsMatch = (user.password || '') === password;

        return emailsMatch && passwordsMatch ? user : null;
      }),
      catchError(err => {
        console.error('Login request failed', err);
        return of(null);
      })
    );
  }
}
