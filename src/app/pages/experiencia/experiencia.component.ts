import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareVariableService } from 'src/app/services/share-variable.service';

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

  constructor(private router: Router, private shareService: ShareVariableService ) { }

  sendDataToComponentB() {
    this.shareService.setSharedData(this.router.url);
  }

  ngOnInit(): void {
    this.sendDataToComponentB();
  }

}
