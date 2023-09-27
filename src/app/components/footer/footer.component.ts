import { Component, OnInit } from '@angular/core';
import { ShareVariableService } from 'src/app/services/share-variable.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  imageSrc: string = '';

  constructor(private sharedService: ShareVariableService) { }

  ngOnInit(): void {
    this.sharedService.showImage$.subscribe((showImage) => {
      if (showImage) {
        this.imageSrc = 'assets/github_light.svg';
      } else {
        this.imageSrc = 'assets/github_dark.svg';
      }
    });
  }

}
