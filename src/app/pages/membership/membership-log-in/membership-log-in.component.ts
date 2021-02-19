import { User } from './../../../models/user';
import { UsersServiceService } from './../../../services/users-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-membership-log-in',
  templateUrl: './membership-log-in.component.html',
  styleUrls: ['./membership-log-in.component.scss'],
})
export class MembershipLogInComponent implements OnInit {
  constructor(private router: Router, private userServ: UsersServiceService) {}
  EmailPhone: any = null;
  EmailPhoneIsValid = false;
  isPhone = false;
  Password: any = null;
  loggingIn = false;
  ngOnInit(): void {}

  changeEmailPhone(emp) {
    if (isNaN(emp)) {
      this.isPhone = false;
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (regex.test(emp)) {
        this.EmailPhoneIsValid = true;
      } else {
        this.EmailPhoneIsValid = false;
      }
    } else {
      this.isPhone = true;
      this.EmailPhoneIsValid = true;
    }
    this.EmailPhone = emp;
  }
  changePassword(pass) {
    this.Password = pass;
  }
  changePage(pg) {
    switch (pg) {
      case 'signup':
        this.router.navigateByUrl('/member/signUp');
        break;
      case 'reset':
        this.router.navigateByUrl('/member/reset');
        break;
    }
  }

  async LogIn(ev) {
    ev.preventDefault();

    if (this.EmailPhoneIsValid && this.Password && !this.loggingIn) {
      this.loggingIn = true;
      let email = '';
      let phoneNumber = '';
      let password = '';
      if (this.isPhone) {
        phoneNumber = this.EmailPhone;
        password = this.Password;
      } else {
        email = this.EmailPhone;
        password = this.Password;
      }
      await this.userServ
        .logIn({ email, password, phoneNumber })
        .then((res) => {
          res.subscribe(
            (r) => {
              this.loggingIn = false;
            },
            (err) => {
              this.EmailPhone = null;
              this.Password = null;
              this.loggingIn = false;
            }
          );
        });
    }
  }
}
