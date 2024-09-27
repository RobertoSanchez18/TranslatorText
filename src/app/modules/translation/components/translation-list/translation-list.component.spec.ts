import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationListComponent } from './translation-list.component';

describe('AddUserComponent', () => {
  let component: TranslationListComponent;
  let fixture: ComponentFixture<TranslationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslationListComponent]
    });
    fixture = TestBed.createComponent(TranslationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});