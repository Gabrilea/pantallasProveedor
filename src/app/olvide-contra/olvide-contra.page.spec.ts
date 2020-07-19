import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OlvideContraPage } from './olvide-contra.page';

describe('OlvideContraPage', () => {
  let component: OlvideContraPage;
  let fixture: ComponentFixture<OlvideContraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlvideContraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OlvideContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
