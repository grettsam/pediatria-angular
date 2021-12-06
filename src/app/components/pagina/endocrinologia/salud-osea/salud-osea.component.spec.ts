import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludOseaComponent } from './salud-osea.component';

describe('SaludOseaComponent', () => {
  let component: SaludOseaComponent;
  let fixture: ComponentFixture<SaludOseaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludOseaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludOseaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
