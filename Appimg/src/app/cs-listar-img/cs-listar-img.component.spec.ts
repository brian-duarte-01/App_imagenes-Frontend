import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsListarImgComponent } from './cs-listar-img.component';

describe('CsListarImgComponent', () => {
  let component: CsListarImgComponent;
  let fixture: ComponentFixture<CsListarImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsListarImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsListarImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
