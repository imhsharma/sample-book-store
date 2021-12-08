import { HttpClient, HttpClientModule } from "@angular/common/http";

import { Injectable } from "@angular/core";

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BookComponent } from "../components/book/book.component";
import { BooklistComponent } from "../components/booklist/booklist.component";



@Injectable()
export class BookListService {
    configUrl = 'http://localhost:3000/list';
    constructor(private http:HttpClient) {}

    getList() {
        return this.http.get<BookListService>(this.configUrl);
      }
}