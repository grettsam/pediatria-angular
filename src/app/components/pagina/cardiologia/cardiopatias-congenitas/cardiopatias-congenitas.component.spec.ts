import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiopatiasCongenitasComponent } from './cardiopatias-congenitas.component';

describe('CardiopatiasCongenitasComponent', () => {
  let component: CardiopatiasCongenitasComponent;
  let fixture: ComponentFixture<CardiopatiasCongenitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardiopatiasCongenitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardiopatiasCongenitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
