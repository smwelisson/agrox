import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { reject } from 'q';
// import { LoginProvider } from '../../app/services/api';
import { NavController } from '@ionic/angular';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formLogin: FormGroup;
  userId: string;
  email: string;
  token: string;

  constructor(
    private fb: FormBuilder,
    // public provider: LoginProvider,
    private loginService: LoginService,
    private navCtrl: NavController
  ) {
    this.createForm();
  }

  ionViewWillEnter() {
    this.createForm();
  }

  private createForm() {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.loginService.post(this.formLogin.value).subscribe((response: any) => {
      console.log('Response', response);
      this.loginService.setCookie('user_id', response.user_id);
      this.loginService.setCookie('email', response.email);
      this.loginService.setCookie('token', response.token);
      this.userData();
      this.irParaProdutos();
    },
      (error) => {
        console.log(error.json);
        reject(error.json);
      });
  }
  userData() {
    this.email = this.loginService.getCookie('email');
    this.userId = this.loginService.getCookie('user_id');
    this.token = this.loginService.getCookie('token');
  }

  logout() {
    this.loginService.clearCookie();
  }

  irParaProdutos(){
    this.navCtrl.navigateForward('tabs');
  }
}

