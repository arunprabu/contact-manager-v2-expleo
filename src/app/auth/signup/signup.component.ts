import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  signup: FormGroup;

  constructor( private fb: FormBuilder, 
    private authService: AuthService) { }

  ngOnInit() {
    this.signup = this.fb.group({
      name1: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.signup.controls; }

  onSignup() {
    console.log(this.signup.value);
    // 
    this.authService.signup(this.signup.value);

  }
}
