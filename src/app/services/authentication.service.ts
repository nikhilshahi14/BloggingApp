import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';

@Injectable()
export class AuthenticationService {

  constructor() { }
  login(username: string, password: string): Observable<any> {
    // let headers = new HttpHeaders().set('Content-Type', 'application/json');
    // // const url = "${environment.apiUrl}/login/Validation";    
    // const url = environment.apiUrl + "/login/Validation";
    let login = new Login();
    login.username = username;
    login.password = password;
    return new Observable(observer => {
        if(login.username == 'blogger@grapecity.com' && login.password =='1qaz!QAZ'){
          
        }
      // .map((response: Response) => {
      //   // login successful if there's a jwt token in the response
      //   let token = response.json() && response.json().token;
      //   console.log(response);    
      //});
    });
    // return this.http.post<any>(`http://localhost:53557/api/login/testhello?Id=` + 1,null);
    // return this.http.post<any>(url,JSON.stringify(login),{headers: headers});

  }
}
