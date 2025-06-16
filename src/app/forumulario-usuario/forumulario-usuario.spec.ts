import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumularioUsuario } from './forumulario-usuario';

describe('ForumularioUsuario', () => {
  let component: ForumularioUsuario;
  let fixture: ComponentFixture<ForumularioUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumularioUsuario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumularioUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
