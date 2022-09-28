import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsRegistrarImgComponent } from './cs-registrar-img.component';

describe('CsRegistrarImgComponent', () => {
  let component: CsRegistrarImgComponent;
  let fixture: ComponentFixture<CsRegistrarImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsRegistrarImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsRegistrarImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
