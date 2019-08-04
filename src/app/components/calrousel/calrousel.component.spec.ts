import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalrouselComponent } from './calrousel.component';

describe('CalrouselComponent', () => {
  let component: CalrouselComponent;
  let fixture: ComponentFixture<CalrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
