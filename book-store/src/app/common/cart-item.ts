import { Book } from './book';

export class CartItem {
    id: string;
    author:string;
    name: string;
    imageUrl: string;
    unitPrice: number;
    quantity: number;

    constructor(book: Book){
        this.id = book.id;
        this.author=book.author;
        this.name = book.name;
        this.imageUrl = book.image;
        this.unitPrice = book.price;
        this.quantity = 1
    }
}
