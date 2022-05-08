import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent implements OnInit {

  signUpForm=new FormGroup({
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    }),
    email: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl(''),
    address: new FormControl(''),
    bankaccount: new FormControl(''),



  });

  constructor(private location: Location, private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred => {
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        email: this.signUpForm.get('email')?.value,
        name: {
          firstname: this.signUpForm.get('name.firstname')?.value,
          lastname: this.signUpForm.get('name.lastname')?.value
        },
        address: this.signUpForm.get('address')?.value,
        bankaccount: this.signUpForm.get('bankaccount')?.value
      };
      this.userService.create(user).then(_ => {
        console.log('User added successfully.');
        this.router.navigateByUrl('/main');
      }).catch(error => {
        console.error(error);
      })
    }).catch(error => {
      console.error(error);
    });
  }
  }

