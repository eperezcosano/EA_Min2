import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubjectInfoPage } from './subject-info.page';

describe('SubjectInfoPage', () => {
  let component: SubjectInfoPage;
  let fixture: ComponentFixture<SubjectInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
