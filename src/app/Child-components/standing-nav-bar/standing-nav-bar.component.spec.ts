import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingNavBarComponent } from './standing-nav-bar.component';

describe('StandingNavBarComponent', () => {
  let component: StandingNavBarComponent;
  let fixture: ComponentFixture<StandingNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandingNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
