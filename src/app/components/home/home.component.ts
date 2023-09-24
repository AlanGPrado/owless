import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareVariableService } from 'src/app/services/share-variable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private shareService: ShareVariableService) { }

  sendDataToComponentB() {
    this.shareService.setSharedData(this.router.url);
  }

  ngOnInit(): void {
    this.sendDataToComponentB();
  }

}
