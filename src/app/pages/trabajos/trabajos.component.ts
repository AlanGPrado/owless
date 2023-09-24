import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareVariableService } from 'src/app/services/share-variable.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {

  constructor(private router: Router, private shareService: ShareVariableService) { }

  sendDataToComponentB() {
    this.shareService.setSharedData(this.router.url);
  }

  ngOnInit(): void {
    this.sendDataToComponentB();
  }

}
