import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilContraPage } from './perfil-contra.page';

describe('PerfilContraPage', () => {
  let component: PerfilContraPage;
  let fixture: ComponentFixture<PerfilContraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilContraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
