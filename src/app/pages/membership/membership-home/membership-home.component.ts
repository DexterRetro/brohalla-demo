import { User } from './../../../models/user';
import { UsersServiceService } from './../../../services/users-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-membership-home',
  templateUrl: './membership-home.component.html',
  styleUrls: ['./membership-home.component.scss'],
})
export class MembershipHomeComponent implements OnInit {
  user: User;
  constructor(private router: Router, private auth: UsersServiceService) {
    if (!auth.isAuthenticated) {
      router.navigateByUrl('/member/logIn');
      return;
    }
    this.user = auth.user;
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
        console.log('kkk');
        this.router.navigateByUrl('member/settings');
        break;
    }
  }
}
