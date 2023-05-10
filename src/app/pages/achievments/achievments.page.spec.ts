import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AchievmentsPage } from './achievments.page';

describe('AchievmentsPage', () => {
  let component: AchievmentsPage;
  let fixture: ComponentFixture<AchievmentsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AchievmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
