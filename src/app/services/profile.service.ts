import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Profile {
  id: string;
  name: string;
  age: number;
  height: string;
  occupation: string;
  religion: string;
  city: string;
  state: string;
  verified: boolean;
  premiumNri: boolean;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profileUrl = 'assets/profiles.json';  

  constructor(private http: HttpClient) {}

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.profileUrl);
  }

  getProfileById(id: string): Observable<Profile | undefined> {
    return this.http.get<Profile[]>(this.profileUrl).pipe(
      map((profiles) => profiles.find(profile => profile.id === id))
    );
  }
}
