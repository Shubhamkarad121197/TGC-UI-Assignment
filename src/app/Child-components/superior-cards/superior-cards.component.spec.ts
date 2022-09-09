import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperiorCardsComponent } from './superior-cards.component';

describe('SuperiorCardsComponent', () => {
  let component: SuperiorCardsComponent;
  let fixture: ComponentFixture<SuperiorCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperiorCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperiorCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
