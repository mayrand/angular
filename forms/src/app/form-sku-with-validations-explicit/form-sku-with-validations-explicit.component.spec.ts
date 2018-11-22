import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuWithValidationsExplicitComponent } from './form-sku-with-validations-explicit.component';

describe('FormSkuWithValidationsExplicitComponent', () => {
  let component: FormSkuWithValidationsExplicitComponent;
  let fixture: ComponentFixture<FormSkuWithValidationsExplicitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSkuWithValidationsExplicitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuWithValidationsExplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
