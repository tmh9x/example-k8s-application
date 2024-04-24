import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SysteminformationService {

  constructor(private http: HttpClient) { }

  getSystem() {
    return this.http.get('http://localhost:3000/systeminformation/system');
  }
  getCpu() {
    return this.http.get('http://localhost:3000/systeminformation/cpu');
  }
  getMem() {
    return this.http.get('http://localhost:3000/systeminformation/memory');
  }
  getOs() {
    return this.http.get('http://localhost:3000/systeminformation/os');
  }
}
