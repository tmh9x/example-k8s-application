import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SysteminformationService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSystem() {
    return this.http.get(`${this.apiUrl}/systeminformation/system`);
  }
  getCpu() {
    return this.http.get(`${this.apiUrl}/systeminformation/cpu`);
  }
  getMem() {
    return this.http.get(`${this.apiUrl}/systeminformation/memory`);
  }
  getOs() {
    return this.http.get(`${this.apiUrl}/systeminformation/os`);
  }
}
