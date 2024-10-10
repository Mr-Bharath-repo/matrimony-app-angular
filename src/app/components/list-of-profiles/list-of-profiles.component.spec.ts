import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfProfilesComponent } from './list-of-profiles.component';

describe('ListOfProfilesComponent', () => {
  let component: ListOfProfilesComponent;
  let fixture: ComponentFixture<ListOfProfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfProfilesComponent]
    });
    fixture = TestBed.createComponent(ListOfProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
