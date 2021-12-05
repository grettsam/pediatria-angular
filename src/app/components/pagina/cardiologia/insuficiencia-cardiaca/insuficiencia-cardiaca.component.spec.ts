import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuficienciaCardiacaComponent } from './insuficiencia-cardiaca.component';

describe('InsuficienciaCardiacaComponent', () => {
  let component: InsuficienciaCardiacaComponent;
  let fixture: ComponentFixture<InsuficienciaCardiacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuficienciaCardiacaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuficienciaCardiacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
