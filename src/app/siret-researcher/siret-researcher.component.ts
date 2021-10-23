import { map } from 'rxjs/operators';
import { KsiretSireneService } from './../core/services/ksiret-sirene.service';
import { Etablissement } from '../core/models/etablissement.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siret-researcher',
  templateUrl: './siret-researcher.component.html',
  styleUrls: ['./siret-researcher.component.css']
})
export class SiretResearcherComponent implements OnInit {

  searchInput: string = '';

  entreprises: Etablissement[] = [];

  constructor(private ksiretSireneService : KsiretSireneService) { }

  ngOnInit(): void {

  }

  clickOnSearch() {

    let regex = new RegExp("^[0-9]+$", 'g');
    let isValid: boolean = regex.test(this.searchInput) && this.searchInput.length === 14;
    console.log("Searching for : \"" + this.searchInput + "\"");

    this.ksiretSireneService.searchEntreprise(this.searchInput)
      .subscribe(res => this.entreprises = res.etablissement);
  }

  showNotFoundError() {
    console.log("PAS DE RESULTAT");
  }

}