import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlauesComponent } from './vlaues.component';

describe('VlauesComponent', () => {
  let component: VlauesComponent;
  let fixture: ComponentFixture<VlauesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VlauesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VlauesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
