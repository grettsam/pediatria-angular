import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneticaComponent } from './genetica.component';

describe('GeneticaComponent', () => {
  let component: GeneticaComponent;
  let fixture: ComponentFixture<GeneticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
