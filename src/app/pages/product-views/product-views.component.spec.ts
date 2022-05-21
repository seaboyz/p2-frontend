import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewsComponent } from './product-views.component';

describe('ProductViewsComponent', () => {
  let component: ProductViewsComponent;
  let fixture: ComponentFixture<ProductViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
