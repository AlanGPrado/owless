import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ShareVariableService } from 'src/app/services/share-variable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  imageSrc: string = '';

  constructor(private sharedService: ShareVariableService, private router: Router, private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.sharedService.showImage$.subscribe((showImage) => {
      if (showImage) {
        this.imageSrc = 'assets/github_light.svg';
      } else {
        this.imageSrc = 'assets/github_dark.svg';
      }
    });

    const element = this.elRef.nativeElement.querySelector('#footer');
    if (element && this.router.url == '/home') {
      this.renderer.setStyle(element, 'margin-top', '0px');
    }
  }

}
