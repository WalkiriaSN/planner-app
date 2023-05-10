import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagesDiaryPage } from './images-diary.page';

describe('ImagesDiaryPage', () => {
  let component: ImagesDiaryPage;
  let fixture: ComponentFixture<ImagesDiaryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImagesDiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
