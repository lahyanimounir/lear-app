import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(private router: Router,
              public authService: AuthService,
              private httpClient: HttpClient) { }

  ngOnInit() {
  }

  // connect(){
  // 	if(this.username == 'admin' && this.password == 'admin'){
  // 		this.router.navigate(['/dashbors']);
  // 	}
  // }

  goTo(path): void {
        this.router.navigateByUrl(path);
    }

    connect(): void {
      let data = { username:this.username,password:this.password };
      this.httpClient
      .get('http://api.sunrise-pro.com/auth/login.php?username='+this.username+'&password='+this.password)
      .subscribe((res:any) =>{ 
        if (res.success) {
          localStorage.setItem('token', res.token);
          this.goTo('dashbors');
        }else{
          console.log('error');
        }
        
      });
        // this.authService.login(data)
        //     .subscribe(result => {
        //         if (result.success) {
        //             this.goTo('dashbors');
        //         }
        //     });
    }

}
