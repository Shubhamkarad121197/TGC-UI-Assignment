import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingHomePageComponent } from './gaming-home-page.component';

describe('GamingHomePageComponent', () => {
  let component: GamingHomePageComponent;
  let fixture: ComponentFixture<GamingHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamingHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
