import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListAllComponent } from './todo-list-all.component';

describe('TodoListAllComponent', () => {
  let component: TodoListAllComponent;
  let fixture: ComponentFixture<TodoListAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
