import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBase } from './chart-base';

describe('ChartBase', () => {
  let component: ChartBase;
  let fixture: ComponentFixture<ChartBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartBase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartBase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
