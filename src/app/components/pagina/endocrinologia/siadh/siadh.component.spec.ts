import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiadhComponent } from './siadh.component';

describe('SiadhComponent', () => {
  let component: SiadhComponent;
  let fixture: ComponentFixture<SiadhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiadhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiadhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
