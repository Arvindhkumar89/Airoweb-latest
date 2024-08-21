import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FlaskService {
  constructor(private http: HttpClient) {}
  send_req(route,data) {
    return this.http.post('http://127.0.0.1:5000'+route, data);
  }
}
