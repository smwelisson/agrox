import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';
import { LoginService } from './login.service';
import { Produto } from '../models/models';
@Injectable({
  providedIn: 'root'
})
export class NovoProdutoService {

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private cookieService: CookieService) { }


  /* post(data: any) {
    return this.http.post(environment.baseUrl + 'api/produtos', data);
  }
} */

  post(data: any) {
    const header = 'Authorization: Token ' + this.loginService.getCookieToken();
    console.log(header);
    const headers = new HttpHeaders(header);
    return this.http.post<Produto[]>(environment.baseUrl + 'api/produtos/', data, { headers });
  }
} 