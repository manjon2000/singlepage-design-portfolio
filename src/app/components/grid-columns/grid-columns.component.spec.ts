import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridColumnsComponent } from './grid-columns.component';

describe('GridColumnsComponent', () => {
  let component: GridColumnsComponent;
  let fixture: ComponentFixture<GridColumnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridColumnsComponent]
    });
    fixture = TestBed.createComponent(GridColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
