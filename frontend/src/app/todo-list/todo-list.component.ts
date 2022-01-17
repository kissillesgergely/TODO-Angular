import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TODOListComponent implements OnInit {
  list: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
