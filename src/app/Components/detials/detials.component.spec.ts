import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetialsComponent } from './detials.component';

describe('DetialsComponent', () => {
  let component: DetialsComponent;
  let fixture: ComponentFixture<DetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
