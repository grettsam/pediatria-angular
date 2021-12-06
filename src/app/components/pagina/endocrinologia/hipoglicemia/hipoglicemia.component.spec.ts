import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipoglicemiaComponent } from './hipoglicemia.component';

describe('HipoglicemiaComponent', () => {
  let component: HipoglicemiaComponent;
  let fixture: ComponentFixture<HipoglicemiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipoglicemiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipoglicemiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
