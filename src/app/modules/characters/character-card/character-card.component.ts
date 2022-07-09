import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterInfoModel } from '../models/character-info.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  constructor(private router: Router) { }

  @Input()
  inCharacterInfo: CharacterInfoModel | undefined;

  ngOnInit(): void {
  }

  onImgClick() {
    this.router.navigate(['/characters/detail/' + this.inCharacterInfo?.id])
  }

}
