import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.signUpForm.value);
  }

}
