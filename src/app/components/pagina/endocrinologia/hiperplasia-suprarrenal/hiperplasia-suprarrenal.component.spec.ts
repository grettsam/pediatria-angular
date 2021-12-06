import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiperplasiaSuprarrenalComponent } from './hiperplasia-suprarrenal.component';

describe('HiperplasiaSuprarrenalComponent', () => {
  let component: HiperplasiaSuprarrenalComponent;
  let fixture: ComponentFixture<HiperplasiaSuprarrenalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiperplasiaSuprarrenalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiperplasiaSuprarrenalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
