import { EventsServiceService } from './../../services/events-service.service';
import { Event } from './../../models/event';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  pics;
  logo;
  header;
  shadow;
  content;
  section;
  opacity;
  newsPic;
  currentNewsIndex = 0;
  Events: Event[];
  currentNews = 0;
  NewsInfo = [
    {
      Topic: 'YMF 11th Annivesary',
      Summary: 'Y.M.F family celebrates it 11 th annivessary',
      Picture: 'ymflogo.jpg',
    },
    {
      Topic: 'YMF Empowers the Youth',
      Summary: 'Youths in the Mining Sector Empowered by Y.M.F',
      Picture: 'news-demo2.jpg',
    },
    {
      Topic: 'YMF In ASM sector',
      Summary: 'YMF does wonders in ASM secto',
      Picture: 'news-demo1.jpg',
    },
  ];
  constructor(private evnt: EventsServiceService) {}

  ngOnInit(): void {
    this.evnt.getEvents().then((eventObs) => {
      eventObs.subscribe((events) => {
        this.Events = [];
        let Evs = [];
        for (let index = 0; index < 3; index++) {
          let e = events.data.events[index];
          e.date = this.evnt.ChangeDateFormat(e.date);
          Evs.push(e);
        }
        this.Events = Evs;
        console.log(this.Events);
      });
    });
  }
  ngAfterViewInit(): void {
    this.autoChangeNews();
    this.pics = window.document.querySelectorAll('.translate');
    this.logo = window.document.querySelector('.YMFLOGO');
    this.header = window.document.querySelector('header');
    this.shadow = window.document.querySelector('.shadowScrow');
    this.content = window.document.querySelector('.content');
    this.section = window.document.querySelector('section');
    this.opacity = window.document.querySelectorAll('.opc');
    this.newsPic = window.document.querySelectorAll('zoomImg');

    window.addEventListener('scroll', () => {
      let scroll = window.pageYOffset;
      let height = this.header.offsetHeight;
      let SecHeight = this.section.offsetHeight;
      let SecHeightY = this.section.getBoundingClientRect();
      this.pics.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
      });
      this.logo.style.opacity = -scroll / (height / 2) + 1;
      this.shadow.style.height = `${scroll * 0.5 + 300}px`;
      this.opacity.forEach((element) => {
        element.style.opacity = scroll / (SecHeightY.top + SecHeight);
      });
    });
  }
  autoChangeNews() {
    this.currentNewsIndex++;
    if (this.currentNewsIndex >= this.NewsInfo.length) {
      this.currentNewsIndex = 0;
    }
    setTimeout(() => {
      this.autoChangeNews();
    }, 10000);
  }
  getDay(date) {
    const dy = date.split(' ');
    return dy[0];
  }
  getMonth(date) {
    const dy = date.split(' ');
    return dy[1];
  }
}
