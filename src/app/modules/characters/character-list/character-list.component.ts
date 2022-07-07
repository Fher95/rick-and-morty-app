import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { tap } from 'rxjs/operators';
import { CharacterListModel } from 'src/app/models/character-list.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  characterList: CharacterListModel | undefined;

  ngOnInit(): void {
    this.characterService.getAllCharacters()
      .pipe(
        tap(res => {
          console.log(res);
          this.characterList = res;
        })
      )
      .subscribe();
  }

}
