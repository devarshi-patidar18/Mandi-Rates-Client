import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAreaMarketsComponent } from './my-area-markets.component';

describe('MyAreaMarketsComponent', () => {
  let component: MyAreaMarketsComponent;
  let fixture: ComponentFixture<MyAreaMarketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAreaMarketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyAreaMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
