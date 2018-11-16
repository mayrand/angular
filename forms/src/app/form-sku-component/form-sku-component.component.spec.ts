import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuComponentComponent } from './form-sku-component.component';

describe('FormSkuComponentComponent', () => {
  let component: FormSkuComponentComponent;
  let fixture: ComponentFixture<FormSkuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSkuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
