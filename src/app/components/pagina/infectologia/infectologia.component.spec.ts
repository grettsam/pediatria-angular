import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectologiaComponent } from './infectologia.component';

describe('InfectologiaComponent', () => {
  let component: InfectologiaComponent;
  let fixture: ComponentFixture<InfectologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfectologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
