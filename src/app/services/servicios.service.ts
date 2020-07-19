// import { Injectable } from '@angular/core';
// import {Http, Headers} from '@angular/http';

// import 'rxjs/add/operator/map';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServiciosService {
//   userName:string;
//   loggedId:boolean;
//   url = 'http://localhost:8100/auth';

//   constructor( private http: Http) { 
//     this.userName= '';
//     this.loggedId= false;
//   }

//   login(userInfo){
//     let url = `${this.url}/login`;
//     let iJon = JSON.stringify(userInfo);

//     return this.http.post(url, iJon, {
//       headers: new Headers ({
//       'Content-Type': 'application/json'
//       })
//     })
//     .map(res => res.text())
//     .map(res =>{
//       if(res=="error" || res=="nofound"){
//         this.loggedId= false;
//       }else{
//         localStorage.setItem('token', res);
//         this.userName= userInfo.user;
//         this.loggedId= true;
//       }
//       return this.loggedId;
//     });
//   }
//   logout(){
//     localStorage.removeItem('token');
//     this.userName= '';
//     this.loggedId= false;
//   }
//   isLoggedId(){
//     return this.loggedId;
//   }
// }
