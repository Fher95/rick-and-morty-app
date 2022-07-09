import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterInfoModel } from '../models/character-info.model';
import { CharacterService } from '../services/character.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  idCharacter: string = '';
  characterInfo: CharacterInfoModel | undefined;
  
  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit(): void {
    this.idCharacter = this.route.snapshot.params.idCharacter;
    this.characterService.getCharacter(this.idCharacter)
    .pipe(
      tap(res => this.characterInfo = res)
    )
    .subscribe();
  }

}
