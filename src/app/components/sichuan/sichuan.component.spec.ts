import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SichuanComponent } from './sichuan.component';

describe('SichuanComponent', () => {
  let component: SichuanComponent;
  let fixture: ComponentFixture<SichuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SichuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SichuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
