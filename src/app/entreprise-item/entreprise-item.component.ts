import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Etablissement } from '../core/models/etablissement.model';

@Component({
  selector: 'app-entreprise-item',
  templateUrl: './entreprise-item.component.html',
  styleUrls: ['./entreprise-item.component.css']
})
export class EntrepriseItemComponent implements OnInit {

  @Input()
  entreprise!: Etablissement;

  formatedSiret = "";
  formatedDate = "";
  showMore = false;

  constructor() { }

  ngOnInit(): void {
    this.formatedSiret = this.formatSiret(this.entreprise.siret)
    this.formatedDate = this.formatDate(this.entreprise.date_creation)
  }

  moreClick() {
    this.showMore = !this.showMore;
  }

  formatDate(date: string) {
    let year = date.substr(0,4);
    let month = date.substr(4,2);
    let day = date.substr(6,2);
    return `${day}/${month}/${year}`
  }
  formatSiret(siret: string) {
    // TODO: Format siret to match 000 000 000 00000
    return siret;
  }

}
