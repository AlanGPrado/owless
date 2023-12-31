import { Component, ElementRef, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ShareVariableService } from 'src/app/services/share-variable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  currentIcon: string = '';
  isCssApplied: boolean = false;
  mobileFlag: boolean = false;
  screenWidth: number = window.innerWidth;
  imageSrc: string = '';
  items: { label: string; route: string; isActive: boolean }[] = [
    { label: 'Home', route: '/home', isActive: false },
    { label: 'Trabajos', route: '/trabajos', isActive: false },
    { label: 'Experiencia', route: '/experiencia', isActive: false }
  ];
  showElement = false;

  constructor(private router: Router, private el: ElementRef, private sharedService: ShareVariableService) { }

  toggleMenu() {
    this.showElement = !this.showElement;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth = window.innerWidth;
  }

  toggleStyles(index: number) {
    this.items.forEach((item, i) => {
      item.isActive = i === index;
    });
  }

  // Quita el efecto CSS selected de las otras secciones del header
  quitStyles() {
    this.items.forEach(item => {
      item.isActive = false;
    })
  }

  toggleTheme() {
    // console.log('Before toggle:', this.isCssApplied);
    this.isCssApplied = !this.isCssApplied;
    // console.log('After toggle:', this.isCssApplied);

    if (this.isCssApplied) {
      console.log('Adding dark mode');
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      this.currentIcon = 'light_mode';
    } else {
      console.log('Adding light mode');
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      this.currentIcon = 'dark_mode';
    }
    this.sharedService.toggleImage();
  }


  // toggleIcon() {
  //   (this.currentIcon === 'dark_mode') ? this.currentIcon = 'light_mode' : this.currentIcon = 'dark_mode';
  // }

  // toggleBackground() {
  //   this.isCssApplied = !this.isCssApplied;
  //   (this.isCssApplied) ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
  //   this.sharedService.toggleImage();
  // }

  onDocumentClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.showElement = false;
    }
  }

  ngOnInit(): void {
    let op: any;
    this.items.forEach(item => {
      if (item.route == this.router.url) {
        if (item.route == '/home') {
          op = 0;
        }
        else if(item.route == '/trabajos') {
          op = 1;
        }
        else {
          op = 2;
        }
        this.toggleStyles(op);
      }
    });

    if (this.screenWidth <= 780) {
      this.mobileFlag = true;
    }
    document.addEventListener('click', this.onDocumentClick.bind(this));
    console.log(this.router.url);
    // Cambiar logo dark mode
    this.sharedService.showImage$.subscribe((showImage) => {
      if (showImage) {
        this.imageSrc = 'assets/owless_logo_light.svg';
      } else {
        this.imageSrc = 'assets/owless_logo_dark.png';
      }
    });

    if (document.body.classList.contains('light-mode')) {
      this.currentIcon = 'dark_mode';
      this.isCssApplied = false;
    }
    else if (document.body.classList.contains('dark-mode')) {
      this.currentIcon = 'light_mode';
      this.isCssApplied = true;
    }
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.onDocumentClick.bind(this));
  }

}
