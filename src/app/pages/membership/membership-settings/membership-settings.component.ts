import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-membership-settings',
  templateUrl: './membership-settings.component.html',
  styleUrls: ['./membership-settings.component.scss'],
})
export class MembershipSettingsComponent implements OnInit {
  user: User;
  OgUser: User;

  FirstNameValid: Boolean = true;
  SurnameValid: Boolean = true;
  passwordValid: Boolean = true;
  passwordCornfirmValid: Boolean = true;
  emailValid: Boolean = true;
  phoneNumberValid: Boolean = true;
  idNumberValid: Boolean = true;
  ProvinceValid: Boolean = true;
  loggingIn = false;
  ChangedInfo = false;
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
  constructor(private router: Router, private auth: UsersServiceService) {
    if (!auth.isAuthenticated) {
      router.navigateByUrl('/member/logIn');
      return;
    }
    this.OgUser = auth.user;
    this.user = { ...auth.user };
  }

  ngOnInit(): void {}
  changePage(page) {
    switch (page) {
      case 'prof':
        this.router.navigateByUrl('member/home');
        break;
      case 'admin':
        this.router.navigateByUrl('member/admin');
        break;
      case 'pay':
        this.router.navigateByUrl('member/payments');
        break;
      case 'set':
        this.router.navigateByUrl('member/settings');
        break;
    }
  }

  toCheckFistName(text) {
    this.checkIfValid('firstname');
    this.ChangedInfo = true;
  }
  toCheckSurname(text) {
    this.checkIfValid('surname');
    this.ChangedInfo = true;
  }
  toCheckEmail(text) {
    this.checkIfValid('email');
    this.ChangedInfo = true;
  }
  toCheckPhone(text) {
    this.checkIfValid('phonenumber');
    this.ChangedInfo = true;
  }
  toCheckID(text) {
    this.checkIfValid('id');
    this.ChangedInfo = true;
  }
  toCheckPasswords(text) {
    this.checkIfValid('passwords');
    this.ChangedInfo = true;
  }
  toCheckPassword(text) {
    this.checkIfValid('password');
    this.ChangedInfo = true;
  }
  toCheckProvince(text) {
    this.checkIfValid('provinces');
    this.ChangedInfo = true;
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

  Submit() {
    this.auth.ChangeUserDetails(this.user);
  }
}
