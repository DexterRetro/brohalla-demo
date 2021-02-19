import { AboutpageserviceService } from './../../../services/aboutpageservice.service';
import { map } from 'rxjs/operators';
import { AboutInfo } from './../../../models/about-info';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-expanded',
  templateUrl: './about-expanded.component.html',
  styleUrls: ['./about-expanded.component.scss'],
})
export class AboutExpandedComponent implements OnInit {
  aboutInfo;
  constructor(
    private abtService: AboutpageserviceService,
    private router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.abtService.getAboutbyID(id).then((abtobs) => {
        abtobs.subscribe((abt) => {
          console.log(abt);
          this.aboutInfo = abt.data.about;
          console.log(this.aboutInfo);
        });
      });
    }
  }

  toPutGrid() {
    if (this.aboutInfo.InbedLogo) {
      return 'grid';
    } else {
      return '';
    }
  }

  animationBody() {
    if (this.aboutInfo.InbedLogo) {
      return 'animate__animated animate__fadeInLeft';
    } else {
      return 'animate__animated animate__fadeIn';
    }
  }
}
