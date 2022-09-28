import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsinstruccionesImgComponent } from './csinstrucciones-img.component';

describe('CsinstruccionesImgComponent', () => {
  let component: CsinstruccionesImgComponent;
  let fixture: ComponentFixture<CsinstruccionesImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsinstruccionesImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsinstruccionesImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
