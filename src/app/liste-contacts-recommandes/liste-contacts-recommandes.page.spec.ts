import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeContactsRecommandesPage } from './liste-contacts-recommandes.page';

describe('ListeContactsRecommandesPage', () => {
  let component: ListeContactsRecommandesPage;
  let fixture: ComponentFixture<ListeContactsRecommandesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeContactsRecommandesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeContactsRecommandesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
