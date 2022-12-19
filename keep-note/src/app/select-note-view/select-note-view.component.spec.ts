import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNoteViewComponent } from './select-note-view.component';

describe('SelectNoteViewComponent', () => {
  let component: SelectNoteViewComponent;
  let fixture: ComponentFixture<SelectNoteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectNoteViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectNoteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
