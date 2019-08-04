import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShanxiComponent } from './shanxi.component';

describe('ShanxiComponent', () => {
  let component: ShanxiComponent;
  let fixture: ComponentFixture<ShanxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShanxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShanxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
