import { HttpClient, HttpClientModule } from "@angular/common/http";

import { Injectable } from "@angular/core";

import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { BookItem } from "../common/booklist";
import { BookComponent } from "../components/book/book.component";
import { BooklistComponent } from "../components/booklist/booklist.component";



@Injectable(
  {
    providedIn: 'root'
  }
)
export class BookListService {
  configUrl = 'http://localhost:3000/list';
  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<BookListService>(this.configUrl);
  }
  public getbookCategoriesObservable$ =
    this.getList().pipe(map((x: any) => {
      return x.map((ob: any) => ob.type);
    }),
      map(x => [...new Set(x)] as string[])
    );

    postData(obj:BookItem){
      return this.http.post<BookItem>(this.configUrl,obj);
    }
}