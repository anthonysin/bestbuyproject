import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProdComponent } from './allproducts.component';

describe('AllProdComponent', () => {
  let component: AllProdComponent;
  let fixture: ComponentFixture<AllProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
