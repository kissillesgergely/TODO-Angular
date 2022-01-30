import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'TODO';
  todos: {id: number, text: string}[] = [];
  counter: number = 0;
  showForm: boolean = false;

  addItemHandler(text: string) {
    this.todos.push({
      id: this.counter++,
      text: text
    });
  }

  deleteHandler(id: number|null) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleShowForm() {
    this.showForm = !this.showForm;
  }
}
