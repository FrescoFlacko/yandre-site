import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumPostCardComponent } from './medium-post-card.component';

describe('MediumPostCardComponent', () => {
  let component: MediumPostCardComponent;
  let fixture: ComponentFixture<MediumPostCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumPostCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
