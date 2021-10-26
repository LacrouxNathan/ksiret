import { SirenResult } from './../core/models/sirenResult.model';
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
  nbPage = 1;
  nbTotalPage = 1

  constructor(private ksiretSireneService : KsiretSireneService) { }

  ngOnInit(): void {

  }

  clickOnSearch() {
    this.ksiretSireneService.searchEntreprise(this.searchInput, 1)
      .subscribe(res => this.updateData(res));
  }

  updateData(data: SirenResult) {
    this.entreprises = data.etablissement;
    this.nbTotalPage = data.total_pages
  }

  showNavPage() {
    return this.entreprises.length > 0
      && this.nbTotalPage > 1;
  }

  clickNavPage(buttonOperator: number) {
    this.nbPage += buttonOperator;
    this.ksiretSireneService.searchEntreprise(this.searchInput, this.nbPage + buttonOperator)
      .subscribe(res => this.updateData(res));
  }

  clickNavFirst() {
    this.nbPage = 1;
    this.ksiretSireneService.searchEntreprise(this.searchInput, 1)
      .subscribe(res => this.updateData(res));
  }

  clickNavLast() {
    this.nbPage = this.nbTotalPage;
    this.ksiretSireneService.searchEntreprise(this.searchInput, this.nbTotalPage)
      .subscribe(res => this.updateData(res));
  }

}