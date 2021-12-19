import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookListService } from 'src/app/service/booklist.service';
import { BooklistComponent } from '../booklist/booklist.component';
import { BookItem } from "../../common/booklist";
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-update-library',
  templateUrl: './update-library.component.html',
  styleUrls: ['./update-library.component.scss']
})
export class UpdateLibraryComponent {

  bookCategories: string[] = [];
  booklistService: BookListService | any;
  selectedBooklist: BooklistComponent[] | any;
  booklist: BooklistComponent[] | any;
  bookName: any;
  authorName: any;
  selectedValue: any;
  priceValue: any;

  constructor(private _bookService: BookListService) { }
  ngOnInit(): void {
    this._bookService.getbookCategoriesObservable$.subscribe((data: any) => {
      this.bookCategories = data;
      this.selectedValue = this.bookCategories[0];
    });
  }


  onSelectCategory(category: string) {
    this.selectedBooklist = this.booklist.filter((x: any) => x.type === category)?.length ? this.booklist.filter((x: any) => x.type === category) : this.booklist;
  }


  addBook() {
    const bookObj: BookItem = {
      id:uuidv4(),
      author:this.authorName,
      type:this.selectedValue,
      name:this.bookName,
      price:this.priceValue,
      image:""
    }
this.resetField()
this._bookService.postData(bookObj).subscribe(res=> console.log(res))
  }

  resetField(){
    this.priceValue= 0;
    this.bookName= "";
    this.authorName="";
    this.selectedValue = this.bookCategories[0];
  }
}
