import { UsersServiceService } from './../../../services/users-service.service';
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership-sign-up',
  templateUrl: './membership-sign-up.component.html',
  styleUrls: ['./membership-sign-up.component.scss'],
})
export class MembershipSignUpComponent implements OnInit {
  user: User = {
    FirstName: 'Mooona',
    Surname: 'Muna',
    password: 'Moona1910',
    passwordCornfirm: 'Moona1910',
    email: 'd@g.com',
    phoneNumber: 7796399550,
    idNumber: '632072989g80',
    Province: 'Harare Province',
  };
  FirstNameValid: Boolean = true;
  SurnameValid: Boolean = true;
  passwordValid: Boolean = true;
  passwordCornfirmValid: Boolean = true;
  emailValid: Boolean = true;
  phoneNumberValid: Boolean = true;
  idNumberValid: Boolean = true;
  ProvinceValid: Boolean = true;
  loggingIn = false;

  constructor(private router: Router, private userAuth: UsersServiceService) {}
  provinces = [
    'Bulawayo Province',
    'Harare Province',
    'Manicaland Province',
    'Mashonaland Central Province',
    'Mashonaland East Province',
    'Mashonaland West Province',
    'Masvingo Province',
    'Matabeleland North Province',
    'Matabeleland South Province',
    'Midlands Province',
  ];
  ngOnInit(): void {}

  changPage(pg) {
    switch (pg) {
      case 'login':
        this.router.navigateByUrl('/member/logIn');
        break;
    }
  }

  toCheckFistName(text) {
    this.checkIfValid('firstname');
  }
  toCheckSurname(text) {
    this.checkIfValid('surname');
  }
  toCheckEmail(text) {
    this.checkIfValid('email');
  }
  toCheckPhone(text) {
    this.checkIfValid('phonenumber');
  }
  toCheckID(text) {
    this.checkIfValid('id');
  }
  toCheckPasswords(text) {
    this.checkIfValid('passwords');
  }
  toCheckPassword(text) {
    this.checkIfValid('password');
  }
  toCheckProvince(text) {
    this.checkIfValid('provinces');
  }
  checkIfValid(field) {
    switch (field) {
      case 'email':
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        this.emailValid = regex.test(this.user.email.toString());
        break;
      case 'passwords':
        this.passwordCornfirmValid =
          this.user.password === this.user.passwordCornfirm;
        break;
      case 'passwords':
        this.passwordValid = this.user.password.length > 7;
        break;
      case 'firstname':
        this.FirstNameValid = this.user.FirstName.length > 1;
        break;
      case 'surname':
        this.SurnameValid = this.user.Surname.length > 1;
        break;
      case 'phonenumber':
        this.phoneNumberValid = this.user.phoneNumber.toString().length === 10;
        break;
      case 'provinces':
        if (this.user.Province) {
          this.ProvinceValid = this.provinces.includes(
            this.user.Province.toString()
          );
        } else {
          this.ProvinceValid = false;
        }

        break;
      case 'id':
        this.idNumberValid = this.user.idNumber.length === 12;
        break;
    }
  }

  async Submit() {
    if (
      this.FirstNameValid &&
      this.ProvinceValid &&
      this.SurnameValid &&
      this.emailValid &&
      this.idNumberValid &&
      this.passwordValid &&
      this.passwordCornfirmValid &&
      this.phoneNumberValid
    ) {
      console.log(this.user);
      this.loggingIn = true;
      const res = await this.userAuth.SignUp(this.user);
      res.subscribe(
        (theRes) => {
          console.log(theRes);
          this.loggingIn = false;
        },
        (err) => {
          this.loggingIn = false;
          console.log(err.error.message);
        }
      );
    }
  }
}
