import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'; // login
import { AngularFirestore } from '@angular/fire/firestore'; //signup
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private ngFireAuth: AngularFireAuth,
    private ngFireStore: AngularFirestore, private router: Router) { }



  signup(signupFormData: any) {
    console.log(signupFormData);

    // 1. send the data to b/e
    this.ngFireAuth.auth
    .createUserWithEmailAndPassword(signupFormData.Email, signupFormData.password)
      .then((status) => {   // 2. get the resp from b/e
        console.log(status);
        // upon successful registration
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 3000);

      },
        (err) => {
          console.log(err);
        });
  }


  login(loginFormData: any) {
    console.log(loginFormData);
    this.ngFireAuth.auth.signInWithEmailAndPassword(loginFormData.Email, loginFormData.password)
      .then((status) => {
        console.log(status);
        localStorage.setItem("authToken", status.user.refreshToken);
        alert('Login Successful');
        // redirect to concepts page
        this.router.navigate(['demo']);
      },
        (err) => {
          console.log(err);
        })
  }


}
