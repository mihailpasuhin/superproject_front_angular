import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsectionPageComponent } from './subsection-page.component';

describe('SubsectionPageComponent', () => {
  let component: SubsectionPageComponent;
  let fixture: ComponentFixture<SubsectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsectionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
