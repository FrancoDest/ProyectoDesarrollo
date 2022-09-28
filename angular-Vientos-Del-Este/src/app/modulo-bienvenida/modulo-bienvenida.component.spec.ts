import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloBienvenidaComponent } from './modulo-bienvenida.component';

describe('ModuloBienvenidaComponent', () => {
  let component: ModuloBienvenidaComponent;
  let fixture: ComponentFixture<ModuloBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloBienvenidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
