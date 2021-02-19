import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-membership-payments',
  templateUrl: './membership-payments.component.html',
  styleUrls: ['./membership-payments.component.scss'],
})
export class MembershipPaymentsComponent implements OnInit {
  membershipType = ['student', 'general'];
  constructor(private router: Router) {}

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
}
