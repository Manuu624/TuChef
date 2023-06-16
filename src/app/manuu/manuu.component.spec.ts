import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuuComponent } from './manuu.component';

describe('ManuuComponent', () => {
  let component: ManuuComponent;
  let fixture: ComponentFixture<ManuuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManuuComponent]
    });
    fixture = TestBed.createComponent(ManuuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
