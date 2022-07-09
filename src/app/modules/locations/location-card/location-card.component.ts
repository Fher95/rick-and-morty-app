import { Component, Input, OnInit } from '@angular/core';
import { LocationInfoModel } from '../models/location-info.model';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent implements OnInit {

  @Input()
  public locationInfo: LocationInfoModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
