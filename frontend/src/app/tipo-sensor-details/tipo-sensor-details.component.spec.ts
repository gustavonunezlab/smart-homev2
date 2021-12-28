import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSensorDetailsComponent } from './tipo-sensor-details.component';

describe('TipoSensorDetailsComponent', () => {
  let component: TipoSensorDetailsComponent;
  let fixture: ComponentFixture<TipoSensorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoSensorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSensorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
