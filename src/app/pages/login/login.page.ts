import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private loadingcontroller: LoadingController,
    private alertcontroller: AlertController,
    private authservice: AuthService,
    private router: Router
  ) { }

  get email() {
    return this.credentials.get('email');
  }
  getpassword(){
    return this.credentials.get('password');
  }

  ngOnInit() {
    this.credentials = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async register() {
		const loading = await this.loadingcontroller.create();
		await loading.present();

		const user = await this.authservice.register(this.credentials.value);
		await loading.dismiss();

		if (user) {
			this.router.navigateByUrl('/main', { replaceUrl: true });
		} else {
			this.showAlert('Registration failed', 'Please try again!');
		}
	}

	async login() {
		const loading = await this.loadingcontroller.create();
		await loading.present();

		const user = await this.authservice.login(this.credentials.value);
		await loading.dismiss();

		if (user) {
			this.router.navigateByUrl('/main', { replaceUrl: true });
		} else {
			this.showAlert('Login failed', 'Please try again!');
		}
	}

	async showAlert(header, message) {
		const alert = await this.alertcontroller.create({
			header,
			message,
			buttons: ['OK']
		});
		await alert.present();
	}

}
