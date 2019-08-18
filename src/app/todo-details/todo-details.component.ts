import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  items : any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id')

}
  }

  
