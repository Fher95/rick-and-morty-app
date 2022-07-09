import { Component, Input, OnInit } from '@angular/core';
import { CharacterInfoModel } from '../models/character-info.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  constructor() { }

  @Input()
  inCharacterInfo: CharacterInfoModel | undefined;

  ngOnInit(): void {
  }

}
