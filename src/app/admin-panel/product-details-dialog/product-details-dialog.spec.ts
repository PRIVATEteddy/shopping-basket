import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialogComponent } from './product-details-dialog';

describe('myDialogComponent', () => {
  let component: MyDialogComponent  ;
  let fixture: ComponentFixture<MyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
