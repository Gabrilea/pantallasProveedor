import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresaEstablePage } from './ingresa-estable.page';

describe('IngresaEstablePage', () => {
  let component: IngresaEstablePage;
  let fixture: ComponentFixture<IngresaEstablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresaEstablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresaEstablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
