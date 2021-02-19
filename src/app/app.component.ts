import { environment } from './../environments/environment';
import { Component, AfterViewInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(private route: Router, private http: HttpClient) {
    for (let i = 1; i <= 16; i++) {
      this.Images.push(`assets/sponsors/${i.toString()}.jpg`);
    }
    this.HandleAnims();
  }
  ngAfterViewInit(): void {
    this.InitAnims();
  }
  currentRoute = '';
  homeLink;
  MembershipLink;
  AboutLink;
  title = 'YMFWeb';
  smallScreenState = false;
  IsSmallScreen = false;
  LoggedIn = false;
  Images = [];
  Year = new Date().getFullYear();
  @HostListener('window:resize', ['$event']) onResize(event) {
    const screenwidth = window.innerWidth;
    if (screenwidth > 730) {
      this.IsSmallScreen = false;
    } else {
      this.IsSmallScreen = true;
    }
  }
  GetYear() {}
  ToggleMenu() {
    if (this.smallScreenState == true) {
      this.smallScreenState = false;
    } else {
      this.smallScreenState = true;
    }
  }
  HandleAnims() {
    this.route.events.subscribe((value) => {
      this.smallScreenState = false;
      this.currentRoute = this.route.url;
      if (this.currentRoute === '/home' && this.homeLink) {
        this.homeLink.forEach((element) => {
          element.style.background = 'white';
        });
        this.MembershipLink.forEach((element) => {
          element.style.background = '';
        });
        this.AboutLink.forEach((element) => {
          element.style.background = '';
        });
      } else if (this.currentRoute.includes('/member') && this.MembershipLink) {
        this.MembershipLink.forEach((element) => {
          element.style.background = 'white';
        });
        this.homeLink.forEach((element) => {
          element.style.background = '';
        });
        this.AboutLink.forEach((element) => {
          element.style.background = '';
        });
      } else if (this.currentRoute === '/about' && this.AboutLink) {
        this.homeLink.forEach((element) => {
          element.style.background = '';
        });
        this.MembershipLink.forEach((element) => {
          element.style.background = '';
        });
        this.AboutLink.forEach((element) => {
          element.style.background = 'white';
        });
      }
    });
  }

  InitAnims() {
    const screenwidth = window.innerWidth;
    if (screenwidth > 730) {
      this.IsSmallScreen = false;
      this.smallScreenState = false;
    } else {
      this.IsSmallScreen = true;
    }
    this.homeLink = window.document.querySelectorAll('.home');
    this.MembershipLink = window.document.querySelectorAll('.membership');
    this.AboutLink = window.document.querySelectorAll('.about');
  }
}
