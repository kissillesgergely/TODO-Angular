import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'TODO';
  todos: {id: number, text: string}[] = [];
  newTask = new FormControl('');
  counter: number = 0;

  addItem(e: Event) {
    e.preventDefault();
    this.todos.push({
      id: this.counter++,
      text: this.newTask.value
    });
  }

  deleteFromList(id: number|null) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
