import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmunologiaYReumatologiaComponent } from './inmunologia-y-reumatologia.component';

describe('InmunologiaYReumatologiaComponent', () => {
  let component: InmunologiaYReumatologiaComponent;
  let fixture: ComponentFixture<InmunologiaYReumatologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmunologiaYReumatologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InmunologiaYReumatologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
