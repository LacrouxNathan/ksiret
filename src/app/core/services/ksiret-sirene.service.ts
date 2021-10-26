import { SirenResult } from './../models/sirenResult.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Api } from '../config';

@Injectable({
  providedIn: 'root'
})
export class KsiretSireneService {

  constructor(private http: HttpClient) { }

  searchEntreprise(searchString: string, nbPage: number): Observable<SirenResult> {
    let requestUrl = Api.apiUrl + searchString + Api.option + nbPage;
    return this.http.get<SirenResult>(requestUrl)
  }
}
