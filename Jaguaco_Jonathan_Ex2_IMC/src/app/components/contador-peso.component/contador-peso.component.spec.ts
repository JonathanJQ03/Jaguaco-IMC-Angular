import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorPesoComponent } from './contador-peso.component';

describe('ContadorPesoComponent', () => {
  let component: ContadorPesoComponent;
  let fixture: ComponentFixture<ContadorPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorPesoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
