import { Component, inject } from '@angular/core'; 
import { Router } from '@angular/router';
import { CommonImports } from '../../Global.constant';

@Component({
  selector: 'app-login',
  imports: [CommonImports],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginObj:any = {
    username:'',
    pwd:''
  };
  router = inject(Router)


  onLogin() {
    if(this.loginObj.username == 'admin' && this.loginObj.pwd =="223344") {
      localStorage.setItem('enquiryApp','admin');
      // Trigger a storage event for the App component to detect
      window.dispatchEvent(new Event('storage'));
      alert("Login Success");
      this.router.navigateByUrl("/enquiry-list");
    } else {
      alert("Wrong Credentials");
    }
  }
}
