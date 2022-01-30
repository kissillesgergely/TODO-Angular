import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TODOListComponent implements OnInit {
  @Input() todos: {id: number, text: string}[] = [];
  @Output() deleteTransmit = new EventEmitter<number|null>();
  

  constructor() { }

  ngOnInit(): void {
  }

  deleteTransmitter(listItemId: number|null) {
    this.deleteTransmit.emit(listItemId);
  }

}
