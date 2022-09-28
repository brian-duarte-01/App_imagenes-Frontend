import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsVisualizarImgComponent } from './cs-visualizar-img.component';

describe('CsVisualizarImgComponent', () => {
  let component: CsVisualizarImgComponent;
  let fixture: ComponentFixture<CsVisualizarImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsVisualizarImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsVisualizarImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
