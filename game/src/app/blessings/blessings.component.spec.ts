import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlessingsComponent } from './blessings.component';

describe('BlessingsComponent', () => {
  let component: BlessingsComponent;
  let fixture: ComponentFixture<BlessingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlessingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlessingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
