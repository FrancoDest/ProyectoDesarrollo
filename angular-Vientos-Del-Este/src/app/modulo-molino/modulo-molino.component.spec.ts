import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloMolinoComponent } from './modulo-molino.component';

describe('ModuloMolinoComponent', () => {
  let component: ModuloMolinoComponent;
  let fixture: ComponentFixture<ModuloMolinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloMolinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloMolinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
