import { Component, OnInit } from '@angular/core';
import { BookListService } from '../../service/booklist.service'

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent  {
  booklist :BooklistComponent[] | any;
  booklistService: BookListService | any;
  name: any;
  author:any;
  price: any;
  image: any;

  constructor(private _bookService: BookListService) { }

  ngOnInit() {
    this.showList();
   }

  showList(){

    this._bookService.getList().subscribe(data=>{
      this.booklist=data;
      console.log(this.booklist);
    })
    
  }

}
