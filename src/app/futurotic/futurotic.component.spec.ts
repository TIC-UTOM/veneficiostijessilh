import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturoticComponent } from './futurotic.component';

describe('FuturoticComponent', () => {
  let component: FuturoticComponent;
  let fixture: ComponentFixture<FuturoticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturoticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturoticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
