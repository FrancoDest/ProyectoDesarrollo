import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolinosComponent } from './molinos.component';

describe('MolinosComponent', () => {
  let component: MolinosComponent;
  let fixture: ComponentFixture<MolinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MolinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
