import { SirenResult } from './../core/models/sirenResult.model';
import { KsiretSireneService } from './../core/services/ksiret-sirene.service';
import { Etablissement } from '../core/models/etablissement.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

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

  constructor(
    private ksiretSireneService : KsiretSireneService,
    private router : Router
    ) {}

  ngOnInit(): void {}

  clickOnSearch() {
    this.ksiretSireneService.searchEntreprise(this.searchInput, 1)
      .subscribe(res => this.updateData(res));
      this.updateRoute();
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
    this.ksiretSireneService.searchEntreprise(this.searchInput, this.nbPage + buttonOperator)
      .subscribe(res => {
        this.updateData(res);
        this.nbPage += buttonOperator;
        this.updateRoute()
      });
  }

  clickNavFirst() {
    this.ksiretSireneService.searchEntreprise(this.searchInput, 1)
      .subscribe(res => {
        this.updateData(res);
        this.nbPage = 1;
        this.updateRoute()
      });
  }

  clickNavLast() {
    this.ksiretSireneService.searchEntreprise(this.searchInput, this.nbTotalPage)
      .subscribe(res => {
        this.updateData(res);
        this.nbPage = this.nbTotalPage;
        this.updateRoute()
      });   
    }

    updateRoute() {
      this.router.navigate(['/search', {name: this.searchInput, page: this.nbPage}]);
    }
}