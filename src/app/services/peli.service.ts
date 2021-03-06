import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPelis } from '../model/IPelis.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliService {
  private url: string = '';
  private apiKey: string = '30ca590c';

  constructor(private http: HttpClient) { }

  //busca coincidencias con el texto y el tipo introducido a traves de la url
  searchMovies(title: string, type: string) {
    this.url = `https://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    return this.http.get<IPelis>(this.url).pipe(map(results => results['Search']));
  }

  getDetails(id: string) {
    return this.http.get<IPelis>(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
