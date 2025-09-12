import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartProduct } from './chart-product';

describe('ChartProduct', () => {
  let component: ChartProduct;
  let fixture: ComponentFixture<ChartProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
