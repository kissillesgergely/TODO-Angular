import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() text: string|null = null;
  @Input() id: number|null = null;
  @Output() deleteEvent = new EventEmitter<number|null>();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteEvent.emit(this.id);
  }
}
