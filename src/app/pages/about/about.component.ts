import { AboutpageserviceService } from './../../services/aboutpageservice.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  aboutData;
  constructor(private service: AboutpageserviceService) {}

  ngOnInit(): void {
    this.service.getAbout().then((a) => {
      a.subscribe((abt) => {
        console.log(abt.data);
        this.aboutData = abt.data;
        console.log(this.aboutData);
      });
    });
  }
}
