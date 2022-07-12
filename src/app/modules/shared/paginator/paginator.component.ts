import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input()
  public inCurrentPage: number = 0;

  @Input()
  public inNumberOfPages: number = 0;

  @Output()
  public outGoToPage = new EventEmitter<number>();
  // @Output()
  // private outPreviousPage = new EventEmitter();
  // @Output()
  // private outNextPage = new EventEmitter<number>();
  // @Output()
  // private outLastPage = new EventEmitter();

  public previousPage() { return this.inCurrentPage - 1 }
  public nextPage() { return this.inCurrentPage + 1 }

  constructor() { }

  ngOnInit(): void {
  }

  public onPreviousPage() {
    if (this.inCurrentPage > 1) {
      this.outGoToPage.emit(this.inCurrentPage - 1);
    }
  }

  public onNextPage() {
    if (this.inCurrentPage < this.inNumberOfPages) {
      this.outGoToPage.emit(this.inCurrentPage + 1);
    }
  }

  public onFirstPage() {
    this.outGoToPage.emit(1);

  }

  public onLastPage() {
    this.outGoToPage.emit(this.inNumberOfPages);
  }

}
