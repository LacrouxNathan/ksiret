import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SiretResearcherComponent } from './siret-researcher/siret-researcher.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { EntrepriseItemComponent } from './entreprise-item/entreprise-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SiretResearcherComponent,
    EntrepriseItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
