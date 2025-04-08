import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProductComponent } from './in-product.component';

describe('InProductComponent', () => {
  let component: InProductComponent;
  let fixture: ComponentFixture<InProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
