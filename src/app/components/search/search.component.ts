import { Component } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  heroes: Heroe[];
  termino: string;

  constructor( private _heroeService: HeroesService, private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this._heroeService.buscarHeroes(params.heroe);
      this.termino = params.heroe;
    });
  }

}
