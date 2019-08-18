import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoChocoblastComponent } from './todo-chocoblast.component';

describe('TodoChocoblastComponent', () => {
  let component: TodoChocoblastComponent;
  let fixture: ComponentFixture<TodoChocoblastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoChocoblastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoChocoblastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
