import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getAllCharacters()
      .pipe(
        tap(res => console.log(res))
      )
      .subscribe();
  }

}
