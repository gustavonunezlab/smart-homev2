import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposSensoresComponent } from './tipos-sensores.component';

describe('TiposSensoresComponent', () => {
  let component: TiposSensoresComponent;
  let fixture: ComponentFixture<TiposSensoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposSensoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposSensoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
