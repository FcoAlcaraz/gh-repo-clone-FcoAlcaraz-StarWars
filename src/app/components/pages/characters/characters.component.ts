import { Component, OnInit } from '@angular/core';
import { Character } from '../../../shared/Interfaces/characterInterface';
import { CharactersService } from '../../../shared/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  character: Character[];

  constructor(private characterService: CharactersService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getAllCharacters() {}

  getCharacterById(id: number) {
    this.characterService.getCharacter(id).subscribe((data: any) => {
      this.character = data;
    });
  }

  getCharacterByUrl(Url: string) {
    this.characterService.getCharacterByUrl(Url).subscribe((data: any) => {
      this.character = data;
    });
  }
}
