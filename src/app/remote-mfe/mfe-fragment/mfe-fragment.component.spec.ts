import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeFragmentComponent } from './mfe-fragment.component';

describe('MfeFragmentComponent', () => {
  let component: MfeFragmentComponent;
  let fixture: ComponentFixture<MfeFragmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MfeFragmentComponent]
    });
    fixture = TestBed.createComponent(MfeFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
