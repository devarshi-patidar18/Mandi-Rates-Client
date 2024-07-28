import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandiRatesComponent } from './mandi-rates.component';

describe('MandiRatesComponent', () => {
  let component: MandiRatesComponent;
  let fixture: ComponentFixture<MandiRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MandiRatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MandiRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
