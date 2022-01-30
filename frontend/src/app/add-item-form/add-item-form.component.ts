import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {
  @Output() addItemEvent = new EventEmitter<string>();
  newTask = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  addItem(event: Event) {
    event.preventDefault();
    this.addItemEvent.emit(this.newTask.value)
  }
}
