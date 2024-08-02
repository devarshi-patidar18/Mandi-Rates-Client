import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchStudiesComponent } from './research-studies.component';

describe('ResearchStudiesComponent', () => {
  let component: ResearchStudiesComponent;
  let fixture: ComponentFixture<ResearchStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchStudiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
