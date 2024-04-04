import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private el: ElementRef) {
    this.el.nativeElement.ownerDocument.body.scrollTop = 0;
  }

  ngOnInit(): void {
  }

}
