import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesInsipidaComponent } from './diabetes-insipida.component';

describe('DiabetesInsipidaComponent', () => {
  let component: DiabetesInsipidaComponent;
  let fixture: ComponentFixture<DiabetesInsipidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetesInsipidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesInsipidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
