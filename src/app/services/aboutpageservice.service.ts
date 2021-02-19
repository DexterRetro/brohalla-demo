import { environment } from './../../environments/environment.prod';
import { map } from 'rxjs/operators';
import { AboutInfo } from './../models/about-info';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutpageserviceService {
  constructor(private http: HttpClient) {}

  async getAbout(): Promise<Observable<{ status: string; data: AboutInfo[] }>> {
    const abt = await this.http.get<{ status: string; data: AboutInfo[] }>(
      `${environment.backendURL_Cloud}/about`
    );
    return abt;
  }

  async getAboutbyID(id): Promise<Observable<any>> {
    const abt = await this.http.get<{ status: string; data: AboutInfo }>(
      `${environment.backendURL_Cloud}/about/${id}`
    );
    abt.subscribe((a) => {
      console.log(a);
    });
    return abt;
  }
}
