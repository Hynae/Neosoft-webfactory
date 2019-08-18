import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMeetingComponent } from './todo-meeting.component';

describe('TodoMeetingComponent', () => {
  let component: TodoMeetingComponent;
  let fixture: ComponentFixture<TodoMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
