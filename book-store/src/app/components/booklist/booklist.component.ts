import { Component, OnInit } from '@angular/core';
import { BookListService } from '../../service/booklist.service'

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent {
  booklist: BooklistComponent[] | any;
  selectedBooklist: BooklistComponent[] | any;
  booklistService: BookListService | any;
  bookCategories: string[] = [];
  name: any;
  author: any;
  price: any;
  image: any;

  constructor(private _bookService: BookListService) { }

  ngOnInit() {
    this.showList();
    this._bookService.getbookCategoriesObservable$.subscribe((data: any) => {
      this.bookCategories = data
      console.log(data);
    });
  }

  showList() {
    this._bookService.getList().subscribe(data => {
      this.booklist = data;
      this.selectedBooklist = data;
      console.log('===',this.booklist);
    })

  }

  onSelectCategory(category: string) {
    this.selectedBooklist = this.booklist.filter((x: any) => x.type === category)?.length ? this.booklist.filter((x: any) => x.type === category) : this.booklist;
  }

}
