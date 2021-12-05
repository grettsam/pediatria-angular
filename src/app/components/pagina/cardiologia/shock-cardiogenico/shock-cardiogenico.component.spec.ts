import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShockCardiogenicoComponent } from './shock-cardiogenico.component';

describe('ShockCardiogenicoComponent', () => {
  let component: ShockCardiogenicoComponent;
  let fixture: ComponentFixture<ShockCardiogenicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShockCardiogenicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShockCardiogenicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
