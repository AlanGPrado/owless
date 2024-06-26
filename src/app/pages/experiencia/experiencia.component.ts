import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  herramientas = [
    { iconSrc: 'assets/jsicon.svg', legend: 'JavaScript' },
    { iconSrc: 'assets/tsicon.svg', legend: 'TypeScript' },
    { iconSrc: 'assets/nodejsicon.svg', legend: 'NodeJS' },
    { iconSrc: 'assets/htmlicon.svg', legend: 'HTML' },
    { iconSrc: 'assets/cssicon.svg', legend: 'CSS' },
    { iconSrc: 'assets/phpicon.svg', legend: 'PHP' },
    { iconSrc: 'assets/giticon.svg', legend: 'Git' },
    { iconSrc: 'assets/postgresqlicon.svg', legend: 'PostgreSQL' },
    { iconSrc: 'assets/mysqlicon.svg', legend: 'MySQL' },
  ];

  frameworks = [
    { iconSrc: 'assets/angularicon.svg', legend: 'Angular' },
    { iconSrc: 'assets/ionicicon.svg', legend: 'Ionic' },
    { iconSrc: 'assets/laravelicon.svg', legend: 'Laravel' },
    { iconSrc: 'assets/nestjsicon.svg', legend: 'NestJS' },
  ];

  constructor(private el: ElementRef) {
    this.el.nativeElement.ownerDocument.body.scrollTop = 0;
  }

  ngOnInit(): void {
  }

}
