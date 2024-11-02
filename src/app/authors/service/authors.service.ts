import {inject, Injectable} from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import {Observable} from "rxjs";
import {Author} from "../../books/model/book";

const Url = 'http://localhost:8080/Authors-api/';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private http: HttpClient = inject(HttpClient);

  public getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(Url + 'Authors/' + id);
  }

}
