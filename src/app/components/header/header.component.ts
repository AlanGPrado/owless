import { Component, ElementRef, NgZone, OnInit, HostListener, Renderer2 } from '@angular/core';
import { ShareVariableService } from 'src/app/services/share-variable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  sharedData: any;
  customStyle: string | null = null;
  currentIcon: string = 'dark_mode';
  isCssApplied: boolean = false;
  mobileFlag: boolean = false;
  screenWidth: number = window.innerWidth;
  items: { label: string; route: string; isActive: boolean }[] = [
    { label: 'Trabajos', route: '/trabajos', isActive: false },
    { label: 'Experiencia', route: '/experiencia', isActive: false }
  ];
  showElement = false;

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

  quitStyles() {
    this.items.forEach(item => {
      item.isActive = false;
    })
  }

  toggleIcon() {
    (this.currentIcon === 'dark_mode') ? this.currentIcon = 'light_mode' : this.currentIcon = 'dark_mode';
  }

  toggleBackground() {
    this.isCssApplied = !this.isCssApplied;
    (this.isCssApplied) ? document.body.classList.add('custom-body-css') : document.body.classList.remove('custom-body-css');
  }

  constructor(private ngZone: NgZone, private el: ElementRef, private renderer: Renderer2, private shareService: ShareVariableService) { }

  onDocumentClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.showElement = false;
    }
  }

  ngOnInit(): void {
    this.sharedData = this.shareService.getSharedData();
    console.log(this.sharedData);
    let op: any;
    this.items.forEach(item => {
      if (item.route == this.sharedData) {
        (item.route == '/trabajos') ? op = 0 : op = 1;
        console.log('SELEVG', item.route)
        this.toggleStyles(op);
      }
    })

    if (this.screenWidth <= 780) {
      this.mobileFlag = true;
    }
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }


  ngOnDestroy() {
    document.removeEventListener('click', this.onDocumentClick.bind(this));
  }

}
