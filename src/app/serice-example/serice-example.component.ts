import { Component, OnInit } from '@angular/core';
import {PlayerDetailsService} from '../player-details.service';
@Component({
  selector: 'app-serice-example',
  templateUrl: './serice-example.component.html',
  styleUrls: ['./serice-example.component.css']
})
export class SericeExampleComponent implements OnInit {

  details=[];
  constructor(private playerDetailsService:PlayerDetailsService) { 
    this.details = playerDetailsService.showDetails();
  }

  ngOnInit() {
  }

}
